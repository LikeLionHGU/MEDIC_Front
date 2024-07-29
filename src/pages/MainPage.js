import React, { useState } from "react";
import HashtagSelect from "../components/MainPage/HashtagSelect";
import Customization from "../components/MainPage/Customization";
import Header from "../components/MainPage/Header";
import BEST from "../components/MainPage/BEST";
import EffectiveProduct from "../components/MainPage/EffectiveProduct";

import modalImage from "../img/Frame 15584.svg";
import Modal from "../components/MainPage/Modal";

const MainPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <HashtagSelect />
      <Customization />
      <BEST />
      <EffectiveProduct />
      <img
        src={modalImage}
        alt="Open Modal"
        onClick={openModal}
        style={{
          cursor: "pointer",
          position: "fixed",
          bottom: "30px",
          right: "50px",
          zIndex: 1000,
          width: "89px",
          height: "89px",
        }}
      />
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default MainPage;
