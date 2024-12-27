function openPopup(imageUrl) {
  const popupWidth = 800;
  const popupHeight = 600;
  const left = (window.innerWidth - popupWidth) / 2;
  const top = (window.innerHeight - popupHeight) / 2;

  window.open(
    imageUrl,
    "_blank",
    `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=no`
  );
}