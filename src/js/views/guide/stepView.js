class StepView {
  _toggleStepHeader(stepHeader) {
    stepHeader.addEventListener("click", (e) => {
      const stepHeader = e.target.closest(".step_header");
      if (!stepHeader) return;
      stepHeader.classList.toggle("step_header--active");
    });
  }

  _setupStepHeaders() {
    const stepHeaders = document.querySelectorAll(".step_header");
    stepHeaders.forEach((stepHeader) => this._toggleStepHeader(stepHeader));
  }

  init() {
    this._setupStepHeaders();
  }
}

export default new StepView();
