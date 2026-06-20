const priceToggle = document.getElementById("price-toggle-container");
priceToggle.addEventListener("click", (event) => {
  const activeButton = event.target.closest(".pricing-toggle__button");
  if (!activeButton) return;
  const buttons = priceToggle.querySelectorAll(".pricing-toggle__button");
  buttons.forEach((button) => {
    button.classList.toggle(
      "pricing-toggle__button--active",
      button === activeButton,
    );
  });
  const isYearly = activeButton.textContent.trim() === "Yearly";
  document.querySelectorAll(".pricing-card__amount").forEach((amount) => {
    amount.textContent = isYearly
      ? amount.dataset.yearly
      : amount.dataset.monthly;
  });
});
