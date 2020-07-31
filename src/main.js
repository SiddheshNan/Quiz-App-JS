import App from "./app";
import {
  disableNextBtn,
  enableNextBtn,
  showOutcome,
  hideOutcome,
  disableAllOptn,
} from "./Helpers";
import QA from "./components/QA";
import End from "./components/End";
import Swal from "sweetalert2";
import "./style.css";

var tempData = {};
var UserData = {};

(async () => {
  document.getElementById("app-root").appendChild(await App());
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  getQuestions();
  document
    .getElementById("start_quiz_btn")
    .addEventListener("click", async () => {
      askName();
      
    });
})();

const startGame = () => {
  document.getElementById("HP_title").remove();
  document.getElementById("extra_spce").remove();
  document.getElementById("morepad").classList.remove("morePadding");
  document.getElementById("HP_info").innerHTML = QA(); // add questions view to homepage card
  tempData.qindx = -1;
  UserData.Score = 0;
  document.getElementById("HP_info").scrollIntoView({
    behavior: "smooth",
  });

  document.getElementById("nextbtn").addEventListener("click", (e) => {
    e.preventDefault();
    nextQue();
  });

  nextQue();
};

const nextQue = () => {
  tempData.qindx++;

  if (tempData.qindx == 0) {
    showOutcome("⏳ Loading ...<br /> Please Wait ...");
    setTimeout(() => hideOutcome(), 0);
  }

  document.getElementById("progress_bar").value = parseInt(
    (tempData.qindx / tempData.data.length) * 100
  );
  document.getElementById("progress_text").innerText =
    parseInt((tempData.qindx / tempData.data.length) * 100) + "% Completed";

  if (typeof tempData.data[tempData.qindx] !== "undefined") {
    if (typeof tempData.data[tempData.qindx + 1] === "undefined")
      document.getElementById("nextbtn").innerText = "Finish Quiz";

    updateView(tempData.data[tempData.qindx]);
  } else {
    gameEnd();
  }
};

const updateView = (current_q) => {
  if (current_q.type == "text") {
    document.getElementById("question").innerText = current_q.question;
    var options = document.getElementById("options");
    hideOutcome();
    options.innerHTML =
      '<div class="field is-grouped is-responsive" style="text-align: center;">';

    tempData.availOptions = 0;
    var try_question_index = 1;

    while (true) {
      if (typeof current_q["option" + try_question_index] !== "undefined") {
        tempData.availOptions++;
        try_question_index++;
      } else {
        break;
      }
    }

    var i;
    for (i = 1; i <= tempData.availOptions; i++) {
      options.innerHTML +=
        ` <p class="control is-normal animated flipInX delay-0.5s" style="text-align: center;">
          <button class="button is-info is-rounded is-responsive" id="option${i}" >` +
        current_q["option" + i] +
        `</button></p>`;
    }
    options.innerHTML += "</div>";
    disableNextBtn();
    document.getElementById("answer").innerText = current_q.ans;
    addListeners(tempData.availOptions);
  }
};

const addListeners = (limit) => {
  var j;
  for (j = 1; j <= limit; j++) {
    ((j, limit) => {
      document.getElementById("option" + j).addEventListener("click", (e) => {
        e.preventDefault();
        const cur_ans = parseInt(
          document.getElementById("answer").innerText.slice(-1)
        );
        if (cur_ans === j) {
          showOutcome(
            "🎉 Congratulations <br /> <span style='color: #17A589'>Correct Answer</span>"
          );
          UserData.Score++;
          disableAllOptn(limit);
          enableNextBtn();
        } else if (cur_ans !== j) {
          showOutcome(
            "❌ &nbsp; Incorrect! Correct Answer:<br /><span style='color: #17A589'>" +
              document.getElementById(
                document.getElementById("answer").innerText
              ).textContent +
              "</span>"
          );
          disableAllOptn(limit);
          enableNextBtn();
        }
      });
    })(j, limit);
  }
};

const gameEnd = async () => {
  document.getElementById("HP_info").innerHTML = End(
    UserData.Name,
    UserData.Score,
    tempData.data.length,
  );
};

const askName = async () => {
  const { value: FullName } = await Swal.fire({
    title: "Enter Your Name",
    input: "text",
    showCancelButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    inputValidator: (value) => {
      if (!value) {
        return "Please Enter Name!";
      }
    },
  });
  if (FullName) {
    UserData.Name = FullName;
    console.log("Name: " + FullName);
    startGame();
  }
};


const getQuestions = async () => {
  /*
  await axios
    .get("")
    .then(function (response) {
      tempData.data = response.data;
    })
    .catch(function (error) {
      Swal.fire({
        title: error,
        text: "An error occured - Please Refresh the Page",
        icon: "error",
        allowOutsideClick: false,
        showCancelButton: false,
        showCloseButton: false,
        buttons: false,
        showConfirmButton: false,
        allowEscapeKey: false,
      });
      console.log(error);
    });
    */
  tempData.data = [
    {
      question: "What is a microphone ?",
      type: "text",
      option1: "True",
      option2: "False",
      option3: "I don't know",
      option4: "Probably Microphone?",
      ans: "option4",
    },
    {
      question: "What is 1+1 ?",
      type: "text",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      ans: "option2",
    },
    {
      question: "Hi ...!",
      type: "text",
      option1: "Hi",
      option2: "Hello",
      ans: "option2",
    },
  ];
};

