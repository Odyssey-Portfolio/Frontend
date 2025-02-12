import { ImageButtonWithModalType } from "@/_components/ImageButtonWithModal";
import { DUMMYTEXT_IMAGE } from "./DummyText";
import { FONT_POPPINS, FONTSTYLE_PARAGRAPH1 } from "./Fonts";

export const CONTENT_SHORTINTRO = `As of now, I am a Consultant at Netcompany Vietnam for almost half a year, maintaining React applications based on customers requirements.
Although I can wrap my head around most domains in the IT industry, be it Back-end, DevOps, I decide to stick to front-end development for now, as it gives me joy and motivation to satisfy my desires.`

export const CONTENT_LIFESTORY = `Since High School, I have always dreamt of creating software products that better our lives. My journey started with Python - a simple yet powerful language which allowed me to create simple apps, like a calculator, a Pomodoro Timer, and so on.
Shortly after entering the University, I got to know awesome tech geeks, as thanks to them, I had learnt more about different technologies, for example, API, Containerzation..., and apply them in some of my personal projects.
Throughout such a journey, there were times when I felt like giving up halfway. But the joy of seeing your brainchildren up and running as expected has propelled me forward.
Hence, I would love to put into good use my perseverance, and some other soft skills, including concise communication, teamwork, open-mindedness.`

export const CONTENT_BADMINTON = `
<div>
    <div className='mb-5'>
        <img 
            src="https://english.cdn.zeenews.com/sites/default/files/2023/05/02/1193507-everything-about-badminton.png?im=Resize=(1200,900)" 
            alt="Badminton players in action" 
            class="w-full h-auto rounded-lg shadow-lg"
        />
    </div>
    <div className='${FONT_POPPINS.className} ${FONTSTYLE_PARAGRAPH1}'>
        The first time I took up badminton was 6 years ago, when I was just a high school student. Back then, I was fortunate enough to exchange skills with professional players, who had a lot of tricks up their sleeves. <br/><br/>
        Most importantly, however, they were easy-going for newcomers, and ready to cover/support newbies like me during intense matches. So… special shoutout to them for shaping a not-so-horrible player like who I am today. 🤣 <br/><br/>
        And until now, I still decide to stick to this badass sport, as it helps me improve qualities that, I believe, no other alternatives can do, including agility, stamina, and sportsmanship.
    <div>
</div>
`
export const CONTENT_MOTORCYCLETRIPS = `<div>
    <div className='mb-5'>
        <img 
            src="https://english.cdn.zeenews.com/sites/default/files/2023/05/02/1193507-everything-about-badminton.png?im=Resize=(1200,900)" 
            alt="Badminton players in action" 
            class="w-full h-auto rounded-lg shadow-lg"
        />
    </div>
    <div className='${FONT_POPPINS.className} ${FONTSTYLE_PARAGRAPH1}'>
        Long before I began engaging in motorcycle trips, I once had a time taking bicycle trips around my hometown. The feeling of taking in fresh sea breeze, or having a wide vision of surrounding scenery, while slowly pedaling, … it’s indescribable. <br/><br/>
        I believe such days have also molded me into someone who loves to derive joy from taking motorbike trips around HCMC during my free time. <br/><br/>
        I have been thinking about, but feeling a bit hesitant about taking long trips to different provinces in the country. Well, safety issues accounts for the majority of such hesitation. <br/><br/>

    <div>
</div>
`

export const CONTENT_COFFEE = `<div>
    <div className='mb-5'>
        <img 
            src="https://english.cdn.zeenews.com/sites/default/files/2023/05/02/1193507-everything-about-badminton.png?im=Resize=(1200,900)" 
            alt="Badminton players in action" 
            class="w-full h-auto rounded-lg shadow-lg"
        />
    </div>
    <div className='${FONT_POPPINS.className} ${FONTSTYLE_PARAGRAPH1}'>
        Ah yes, my so-called “liquid nitrogen of the day” (laughs). Just a trivia, do you know that overclocking masters use liquid nitrogen to boost CPU frequencies to shocking numbers? Well, this applies the same for me, as without coffee, I can say that most of my daily productivity is wasted. <br/><br/>
        This is also probably my most commonly ordered drink, especially during the university days, when I and my classmates hung out at different coffee shops to speedrun group projects. <br/><br/>
        And definitely, one of my future goals/dreams is to work on a laptop, by the window, with a cup of coffee, and in front of me would be a garden of some kind. <br/><br/>
    <div>
</div>
`


export const CONTENT_HOBBIES: ImageButtonWithModalType[] = [
    {
      image: DUMMYTEXT_IMAGE,
      title: "Badminton",
      htmlContent: CONTENT_BADMINTON,
    },
    {
      image: DUMMYTEXT_IMAGE,
      title: "Motorcycle Trips",
      htmlContent: CONTENT_MOTORCYCLETRIPS,
    },
    {
      image: DUMMYTEXT_IMAGE,
      title: "Coffee",
      htmlContent: CONTENT_COFFEE,
    },
  ];
