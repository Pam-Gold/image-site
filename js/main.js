//




let notifyBtn, notification, accountBtn;

notifyBtn = document.querySelectorAll(".notify__icon");

notification = document.querySelectorAll(".notification");

//
notifyBtn.forEach((notify, index) => {
  notify.addEventListener("click", () => {
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
  shareBtn.addEventListener("click", () => {
    console.log("Clicked Share");
    shareModal[index].style.display = "flex";
  });
});

closeShareModal.forEach((close, index) => {
  close.addEventListener("click", () => {
    shareModal[index].style.display = "none";
  });
});

let likeBtn, likeModal;

likeBtn = document.querySelectorAll(".card__button-like");
likeModal = document.querySelectorAll(".modal-liked");

likeBtn.forEach((like, index) => {
  like.addEventListener("click", () => {
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
  more.addEventListener("click", () => {
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
  hideBtn.addEventListener("click", () => {
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
  modal.addEventListener("click", () => {
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
  download.addEventListener("click", () => {
    blankModal("Image Downloaded");
  });
});

moreReport.forEach((report) => {
  report.addEventListener("click", () => {
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

