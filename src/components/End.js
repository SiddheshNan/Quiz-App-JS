const End = (name, score, total, min) => {
  const template = `
  <div class="has-text-centered">
    <h3>Thank You for Playing! ${name}</h3>
      <h4>Your Score Was ${score} / ${total}</h4>
      <br />
      <button class="button is-success is-rounded is-large" onclick="window.location.reload();">Replay Quiz!</button>
      <br />
      <br />
      <br />
      <h5>Stay Home.. Stay Safe..</h5>
  </div>
`;

  return template;
};

export default End;
