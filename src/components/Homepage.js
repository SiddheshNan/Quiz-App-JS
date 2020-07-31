

const HP = () => {
	const template = `
    
<div class="container">
    <section class="articles" >
        <div class="column is-8 is-offset-2">
            <div class="card article">
                <div class="card-content morePadding" style="text-align: center" id="morepad">
                    <div class="media">
                        <div class="media-content has-text-centered" id="extra_spce">
                            <p class="title article-title" id="HP_title">
                                <b>Welcome to the Quiz</b>
                            </p>
                        </div>
                    </div>
                    <div class="content" id="HP_info">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                           
                        </p>
                        <br />
                        
                        <div class="has-text-centered">
                            <h3 class="has-text-centered">Click the button to start</h3>
                            <button class="button is-primary is-large is-rounded animated jello delay-2s" id="start_quiz_btn">Start Quiz</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

  `;

	return template;
};

export default HP;
