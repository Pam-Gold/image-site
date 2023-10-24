//




let notifyBtn, notification, accountBtn;

notifyBtn = document.querySelectorAll(".notify__icon");

notification = document.querySelectorAll(".notification");

//
notifyBtn.forEach((notify, index) => {
  notify.addEventListener("pointerdown", () => {
    notification[index].classList.toggle("toggle--notification");
  });
  notify.addEventListener("touchstart", () => {
    notification[index].classList.toggle("toggle--notification");
  });
});
//

let shareBtn, shareModal, closeShareModal, cardShare;

shareBtn = document.querySelectorAll(".share__icon");

shareModal = document.querySelectorAll(".modal-share");

closeShareModal = document.querySelectorAll(".share-title-close");

cardShare = document.querySelectorAll(".card__button-share");
//

shareBtn.forEach((shareBtn, index) => {
  shareBtn.addEventListener("pointerdown", () => {
    console.log("Clicked Share");
    shareModal[index].style.display = "flex";
  });
  shareBtn.addEventListener("touchstart", () => {
    console.log("Clicked Share");
    shareModal[index].style.display = "flex";
  });
});

closeShareModal.forEach((close, index) => {
  close.addEventListener("pointerdown", () => {
    shareModal[index].style.display = "none";
  });
  close.addEventListener("touchstart", () => {
    shareModal[index].style.display = "none";
  });
});

let likeBtn, likeModal;

likeBtn = document.querySelectorAll(".card__button-like");
likeModal = document.querySelectorAll(".modal-liked");

likeBtn.forEach((like, index) => {
  like.addEventListener("pointerdown", () => {
    setTimeout(() => {
      likeBtn[index].style.color = "black";
      likeModal[index].style.display = "none";
      cardShare[index].style.display = "flex";
      cardMore[index].style.display = "flex";
    }, 2000);

    likeBtn[index].style.color = "red";
    likeModal[index].style.display = "flex";
    cardShare[index].style.display = "none";
    cardMore[index].style.display = "none";
  });

  like.addEventListener("touchstart", () => {
    setTimeout(() => {
      likeBtn[index].style.color = "black";
      likeModal[index].style.display = "none";
      cardShare[index].style.display = "flex";
      cardMore[index].style.display = "flex";
    }, 2000);

    likeBtn[index].style.color = "red";
    likeModal[index].style.display = "flex";
    cardShare[index].style.display = "none";
    cardMore[index].style.display = "none";
  });
});

//

let moreBtn, moreModal, cardMore;

moreBtn = document.querySelectorAll(".more__icon");

moreModal = document.querySelectorAll(".modal-more");

cardMore = document.querySelectorAll(".card__button-more");

moreBtn.forEach((more, index) => {
  more.addEventListener("pointerdown", () => {
    moreModal[index].classList.toggle("toggle--more");
  });
  more.addEventListener("touchstart", () => {
    moreModal[index].classList.toggle("toggle--more");
  });
});

//

let moreHideBtn,
  moreDownloadBtn,
  moreReport,
  modalHidden,
  undoModalHidden,
  modalBlank;

moreHideBtn = document.querySelectorAll(".more-hide");

modalHidden = document.querySelectorAll(".modal-hidden");

undoModalHidden = document.querySelectorAll(".undo-button");

moreDownloadBtn = document.querySelectorAll(".more-download");

moreReport = document.querySelectorAll(".more-report");

modalBlank = document.querySelector(".modal-blank");

//

moreHideBtn.forEach((hideBtn, index) => {
  hideBtn.addEventListener("pointerdown", () => {
    setTimeout(() => {
      modalHidden[index].style.display = "flex";
      cardMore[index].style.display = "none";
      moreModal[index].classList.remove("toggle--more");
      cardShare[index].style.display = "none";
      likeBtn[index].style.display = "none";
    }, 1000);
  });
  hideBtn.addEventListener("touchstart", () => {
    setTimeout(() => {
      modalHidden[index].style.display = "flex";
      cardMore[index].style.display = "none";
      moreModal[index].classList.remove("toggle--more");
      cardShare[index].style.display = "none";
      likeBtn[index].style.display = "none";
    }, 1000);
  });
});

undoModalHidden.forEach((modal, index) => {
  modal.addEventListener("pointerdown", () => {
    setTimeout(() => {
      modalHidden[index].style.display = "none";
      cardMore[index].style.display = "block";
      moreModal[index].classList.remove("toggle--more");
      cardShare[index].style.display = "block";
      likeBtn[index].style.display = "block";
    }, 2000);
  });
  modal.addEventListener("touchstart", () => {
    setTimeout(() => {
      modalHidden[index].style.display = "none";
      cardMore[index].style.display = "block";
      moreModal[index].classList.remove("toggle--more");
      cardShare[index].style.display = "block";
      likeBtn[index].style.display = "block";
    }, 2000);
  });
});

moreDownloadBtn.forEach((download, index) => {
  download.addEventListener("pointerdown", () => {
    blankModal("Image Downloaded");
  });
  download.addEventListener("touchstart", () => {
    blankModal("Image Downloaded");
  });
});

moreReport.forEach((report) => {
  report.addEventListener("pointerdown", () => {
    blankModal("Image Reported");
  });
  report.addEventListener("touchstart", () => {
    blankModal("Image Reported");
  });
});

function blankModal(status) {
  setTimeout(() => {
    modalBlank.innerText = ``;
    modalBlank.style.display = "none";
  }, 3000);
  setTimeout(() => {
    modalBlank.innerText = `${status}`;
    modalBlank.style.display = "flex";
  }, 1000);
}

