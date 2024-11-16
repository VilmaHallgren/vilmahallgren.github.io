document.addEventListener("DOMContentLoaded", function () {
  let button = document.querySelector("button");
  let textElement = document.getElementById("desc-aboutme");

  function buttonClick() {
    const translations = {
      "Jag är 22 år gammal och bor i Jönköping. År 2023 flyttade jag från Göteborg hit för att studera Grafisk Design och Webbutveckling på Tekniska Högskolan. Jag trivs väldigt bra med utbildningen och i fina staden Jönköping! På fritiden håller jag på mycket med design och då jobbar jag främst i Adobe programmen såsom Illustrator, InDesign och Photoshop. Jag älskar också musik väldigt mycket och spelar både gitarr, piano och ukulele. Jag har alltid älskat att vara kreativ och brinner för design och konst så jag känner att jag verkligen har hittat rätt! I utbildningen håller vi även på med programmering och codar i HTML, CSS och Javascript och det tycker jag också är kul. Därmed denna websidan jag skapat själv. Jag söker praktikplats veckorna 13-21 i Göteborg så kolla gärna in mitt CV och min portfolio. Jag är ivrig till att lära mig mer och hade gärna praktiserat hos er!":
        "I am 22 years old and live in Jönköping, Sweden. In 2023 I moved here from Gothenburg to study New Media Design at Jönköping University. I really enjoy the program and also love it here in the beautiful city of Jönköping. In my spare time, I create designs in Adobe applications such as Illustrator, InDesign and Photoshop. I am a huge fan of music and learnt to play the guitar, piano and the ukulele. I have always loved being creative and I am so passionate about design and art so I feel I have truly found my calling! In the program, we also do programming and learn to code in HTML, CSS and Javascript, and I enjoy that too. Thus this website I created myself. I am looking for an internship during the weeks 13-21 in Gothenburg, so please check out my CV and my portfolio. I am eager to learn more and would love to have my internship with you!",
    };

    let swedishText = textElement.innerText.trim();

    if (translations[swedishText]) {
      textElement.innerText = translations[swedishText];
    } else {
      textElement.innerText = Object.keys(translations)[0];
    }
  }

  button.addEventListener("click", buttonClick);
});
