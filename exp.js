let jsPsych = initJsPsych();

const trial = {
    type: jsPsychSurvey,
    survey_json: {
      showQuestionNumbers: false,
      elements:
        [
          {
            type: 'text',
            title: "编号", 
            name: 'order', 
            required: true,
          }, 
          {
            type: 'text',
            title: "年龄", 
            name: 'age', 
            required: true,
          }, 
          {
            type: 'radiogroup',
            title: "利手", 
            name: 'handedness', 
            choices: ['左', '右']
          }, 
      ]
    }
  };

  let instruction = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
        <p id='welcome' style='font-size: 35px; color: blue; text-align: center;'>欢迎参加本次实验！</p>
        <div style="text-align: center;">
            <p>实验首先在电脑屏幕上呈现一个白色的“+”符号注视点，</p>
            <p>提醒你开始实验，并集中注视电脑屏幕中央，接着呈现一些图片。</p>
            <p>实验任务:</p>
            <p>当你看到“鲜花”图片时,按键盘上的“F”键。</p>
            <p>当你看到“非鲜花”图片时,按键盘上的“J”键。</p>
        </div>
        <p>按任意键开始实验</p>
    </div>
    `,
    post_trial_gap: 500
}

// Timeline Variables Demo
let timeline = {
    type: jsPsychHtmlKeyboardResponse,
    post_trial_gap: 500,
    timeline: [
        {
            stimulus: `+`,
            choices: ["NO_KEYS"],
            trial_duration: 500,
        },
        {
            stimulus: jsPsych.timelineVariable('picture'),
            choices: ['f','j']
        }
    ],
    timeline_variables: [
        {picture: '<img src="./images/flower1.png">'},
        {picture: '<img src="./images/flower2.png">'},
        {picture: '<img src="./images/flower3.png">'},
        {picture: '<img src="./images/flower4.png">'},
        {picture: '<img src="./images/phone.png">'},
        {picture: '<img src="./images/clean.png">'},
        {picture: '<img src="./images/bike.png">'},
    ],
    sample: {
        type: 'fixed-repetitions',
        size: 30
    }
}

jsPsych.run([
    trial,
    instruction,
    timeline
])

