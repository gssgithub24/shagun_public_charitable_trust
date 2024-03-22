import React, { useState, useEffect, useContext } from "react";
import Modal from "../../../../Components/Modal/Modal";
import { IoClose } from "react-icons/io5";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { doc, collection, setDoc, updateDoc } from "firebase/firestore";
import { storage, db } from "../../../../Components/Firebase/Firebase";
import DataContext from "../../../../Context/FetchData/DataContext";
import DeleteDataContext from "../../../../Context/DeleteData/DeleteDataContext";
import LoadContext from "../../../../Context/LoadingAnimation/LoadingContext";
const EditCertificate = ({
  openModal,
  closeModal,
  isModalOpen,
  CertificateData,
}) => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState();
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [imageError, setImageError] = useState();
  const [titleError, setTitleError] = useState();
  const [descriptionError, setDescriptionError] = useState();

  const { isloading, openSetLoading, closeSetLoading } =
    useContext(LoadContext);
  const { certificateDataRetrival } = useContext(DataContext);
  const { deleteCertificate } = useContext(DeleteDataContext);
  const handleChange = (e) => {
    try {
      const { name, value } = e.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      validate();

    } catch (error) {
      alert(error);
    }
  };
  const handleImageUpload = (event) => {
    let temp = event.target.files[0];
    setFile(event.target.files[0]);
    if (temp) {
      //   console.log(temp)
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(temp);
      setImageError("");
    }
  };
  const clearImage = () => {
    setImage(null);
  };

  const setdata = () => {
    setData({
      title: CertificateData?.title,
      description: CertificateData?.description,

    });
    setImage(CertificateData?.imageUrl);

  };
  useEffect(() => {
    setdata();
  }, []);
  const validate = () => {
    let valid = true;
    if (!image) {
      setImageError("Upload an Image");
      valid = false;
    } else {
      setImageError("");
    }
    if (!data.title.trim()) {
      setTitleError("Enter the title");
      valid = false;
    } else {
      setTitleError("");
    }
    if (!data.description.trim()) {
      setDescriptionError("Enter the description");
      valid = false;
    } else {
      setDescriptionError("");
    }
    if (valid) {
      return true;
    } else {
      return false;
    }
  };
  const handleUpdate = async (e) => {
    const certificateDocRef = doc(
      collection(db, "certificate"),
      CertificateData.id
    );
    e.preventDefault();
    try {
      if (validate()) {
        closeModal();
        openSetLoading();
        if (CertificateData.imageUrl !== image && image) {
          const banner = ref(storage, "certificate/" + data.title);
          try {
            await deleteObject(banner).then((res) => {
              console.log("Image Deleted" + res);
              alert("Image Deleted");
            });
            await uploadBytes(banner, file).then(async (snapshot) => {
              await getDownloadURL(snapshot.ref).then((downloadUrl) => {
                console.log(downloadUrl);
                data.imageUrl = downloadUrl;
              });
            });
            await updateDoc(certificateDocRef, {
              imageUrl: data.imageUrl,
            });
          } catch (error) {
            console.log(error);
          }
        }

        if (
          CertificateData.title !== data.title ||
          CertificateData.description !== data.description
        ) {
          await updateDoc(certificateDocRef, {
            title: data.title,
            description: data.description,
          });
        }
        await certificateDataRetrival();
        closeSetLoading();
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async () => {
    closeModal();
    openSetLoading();
    deleteCertificate(CertificateData);
    await certificateDataRetrival();
    closeSetLoading();
  };
  return (
    <>
      <div className="">
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <form className="">
            <div className="flex md:flex-row flex-col justify-center items-center">
              <div className="flex items-center justify-center xl:w-[60%] w-full md:my-0 my-4 px-5 relative -z-0">
                <div className="flex flex-col justify-center items-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-[15rem] border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-slate-200 hover:bg-white py-3"
                  >
                    {image ? (
                      <>
                        <img
                          src={image}
                          alt="Uploaded"
                          className="h-52 md:w-48 object-cover rounded-lg py-2"
                        />
                        <div className="bg-gray-400 absolute -top-2 right-2 p-1 rounded-full z-10">
                          <IoClose
                            className="text-red-700 "
                            size={15}
                            onClick={clearImage}
                          />
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 xl:text-sm text-xs text-gray-500 dark:text-gray-400 text-center">
                          <span className="font-semibold ">
                            Click to upload
                          </span>{" "}
                          <br />
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                          SVG, PNG, JPG or GIF
                        </p>
                      </div>
                    )}
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleImageUpload}
                      required
                    />
                  </label>
                  {imageError && (
                    <p className="text-red-600 text-sm">{imageError}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col w-full my-5 md:mx-5 mx-0">
                <div className="relative">
                  <input
                    type="text"
                    id="firstname"
                    className="block w-full px-2.5 py-2.5 text-sm bg-transparent rounded-lg border-2 border-gray-400 text-black hover:shadow-sm hover:shadow-slate-200 focus:outline-none focus:ring-0 focus:border-orange-600 peer hover:border-orange-600 dark:focus:border-orange-600 peer-hover:shadow-orange-500 peer-focus:shadow-orange-500 "
                    placeholder="Title"
                    minLength={4}
                    value={data.title}
                    name="title"
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="firstname"
                    className="absolute text-sm  text-black  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-200  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Title
                  </label>
                </div>
                {titleError && (
                  <p className="text-red-600 text-sm mx-1">{titleError}</p>
                )}
                <div className="relative mt-2">
                  <textarea
                    id="description"
                    className="block w-full px-2.5 py-2.5 text-sm bg-transparent rounded-lg border-2 border-gray-400 text-black hover:shadow-sm hover:shadow-slate-200 focus:outline-none focus:ring-0 focus:border-orange-600 peer hover:border-orange-600 dark:focus:border-orange-600 peer-hover:shadow-orange-500 peer-focus:shadow-orange-500"
                    placeholder="Description"
                    minLength={4}
                    rows={6}
                    style={{ resize: "none" }}
                    value={data.description}
                    name="description"
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="description"
                    className="absolute text-sm  text-black  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-200  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[15%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 pointer-events-none"
                  >
                    Description
                  </label>
                </div>
                {descriptionError && (
                  <p className="text-sm text-red-600 mx-1">
                    {descriptionError}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-row md:justify-end justify-center items-end">
              <button
                className="mx-3 bg-slate-500 px-14 py-2 hover:bg-red-400 text-white rounded-md"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="mx-3 bg-orange-500 px-14 py-2 hover:bg-orange-600 text-white rounded-md"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default EditCertificate;
