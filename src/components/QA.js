
const QA = () => {
	const template = `
    <div style="text-align: center;" id="q_section">
      <div style="padding-left: 25px; padding-right: 25px;">
        <p id="progress_text"></p>
        <progress class="progress is-primary" value="0" max="100" id="progress_bar" style="padding: 0px;"></progress>
      </div>
      <h2 id="question" class="animated fadeInDown"><h2>
      <p id="options"></p>
      <h3 id="answer" style="display: none;"><h3>
      <button id="nextbtn" class="button is-primary is-rounded is-large animated flipInY"> Next Question ⟳ </button>
      <br>
      <h3 id="outcome"></h3>
    </div>
  `;

	return template;
};

export default QA;
