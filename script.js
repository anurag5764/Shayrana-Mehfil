/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
const projectName = "random-quote-machine";

/*
  Code by Gabriel Nunes
  Modified by Todd Chaffee to use Camper gist for JSON Quote data.
*/

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];
var currentQuote = "",
  currentAuthor = "";

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: "application/json",
    },
    url: "https://raw.githubusercontent.com/anurag5764/shayari/main/shayari.json",
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === "string") {
        quotesData = JSON.parse(jsonQuotes);
        console.log("quotesData");
        console.log(quotesData);
      }
    },
  });
}
// const Data = {
//   quotes: [
//     {
//       quote: "कुछ तो मजबूरियाँ रहीं होंगी, यूँ कोई बेवफ़ा नहीं होता।",
//       author: "बशीर बद्र",
//     },
//     {
//       quote:
//         "ग़म ने हंसने न दिया, ज़माने ने रोने न दिया। तन्हाईयों ने चैन से जीने न दिया।",
//       author: "जॉन एलिया",
//     },
//     {
//       quote: "ख्वाबों में ही जी लेंगे हम, हकीकत में तो अब दिल टूट चुका है।",
//       author: "अहमद फ़राज़",
//     },
//     {
//       quote:
//         "हर मुलाक़ात का अंजाम जुदाई क्यों है, अब तो हर वक्त यही बात सताती है हमें।",
//       author: "ग़ालिब",
//     },
//     {
//       quote:
//         "दिल ही तो है न संग-ओ-ख़िश्त दर्द से भर न आये क्यों, रोएंगे हम हज़ार बार कोई हमें सताये क्यों।",
//       author: "मिर्ज़ा ग़ालिब",
//     },
//     {
//       quote:
//         "तुम आये हो न शब-ए-इंतज़ार गुज़री है, तलाश में है सहर बार बार गुज़री है।",
//       author: "फ़ैज़ अहमद फ़ैज़",
//     },
//     {
//       quote:
//         "लोग कहते हैं कि मेरा दिल पत्थर का है, लेकिन अगर ये दिल पत्थर का है तो रोता क्यों है।",
//       author: "अज्ञात",
//     },
//     {
//       quote:
//         "वो आये घर में हमारे खुदा की कुदरत है, कभी हम उनको कभी अपने घर को देखते हैं।",
//       author: "मिर्ज़ा ग़ालिब",
//     },
//     {
//       quote: "हर ज़ख्म किसी ठोकर की मेहरबानी है, हर चोट किसी याद की निशानी है।",
//       author: "शायर अनजान",
//     },
//     {
//       quote:
//         "कभी कभी इस तरह दिल में तेरी याद आती है, जैसे ग़रीब के आँगन में चुपके से बहार आ जाये।",
//       author: "बशीर बद्र",
//     },
//     {
//       quote:
//         "उम्र भर हम यूँ ही ग़लतफ़हमी में जीते रहे, धूल चेहरे पे थी और हम आईना साफ करते रहे।",
//       author: "गुलज़ार",
//     },
//     {
//       quote: "दर्द जब हद से गुजर जाता है तो इंसान ख़ामोश हो जाता है।",
//       author: "फ़ैज़ अहमद फ़ैज़",
//     },
//     {
//       quote:
//         "हम भी अब मोहब्बत के गीत गाते नहीं हैं, अब दिल की धड़कनों को हम सताते नहीं हैं।",
//       author: "जिगर मुरादाबादी",
//     },
//     {
//       quote:
//         "कौन कहता है कि मौत आई तो मर जाऊँगा, मैं तो दरिया हूँ समुंदर में उतर जाऊँगा।",
//       author: "मुज़्तर ख़ैराबादी",
//     },
//     {
//       quote:
//         "मुझे तुमसे कुछ नहीं चाहिए मोहब्बत के सिवा, ये कर्ज भी तुझ पर छोड़ दिया मैंने।",
//       author: "फ़राज़",
//     },
//     {
//       quote:
//         "तुम्हारे बाद भी तुम्हें चाहने की आदत रही, मुझसे मोहब्बत नहीं, मुझसे मोहब्बत की आदत रही।",
//       author: "निदा फ़ाज़ली",
//     },
//     {
//       quote:
//         "कभी-कभी दिल चाहता है कि जी भर के रो लें, बिना किसी वजह के ही सिसकियाँ भर लें।",
//       author: "राहत इन्दोरी",
//     },
//     {
//       quote:
//         "हर मुलाकात का अंजाम जुदाई क्यों है, अब तो हर वक्त यही बात सताती है हमें।",
//       author: "ग़ालिब",
//     },
//     {
//       quote:
//         "दिल ही तो है न संग-ओ-ख़िश्त दर्द से भर न आये क्यों, रोएंगे हम हज़ार बार कोई हमें सताये क्यों।",
//       author: "मिर्ज़ा ग़ालिब",
//     },
//     {
//       quote:
//         "तुम्हारे बिना कभी रात नहीं आएगी, तुम्हारे बिना दिन भी उजाला नहीं लाएगा।",
//       author: "फ़ैज़ अहमद फ़ैज़",
//     },
//     {
//       quote: "गम ये नहीं कि तुझसे जुदा हो गये, दर्द ये है कि हम कहाँ खो गये।",
//       author: "फ़राज़",
//     },
//     {
//       quote:
//         "अबके हम बिछड़े तो शायद कभी ख़्वाबों में मिलें, जिस तरह सूखे हुए फूल किताबों में मिलें।",
//       author: "अहमद फ़राज़",
//     },
//     {
//       quote:
//         "तेरे बिना ज़िन्दगी से कोई शिकवा तो नहीं, तेरे बिना ज़िन्दगी भी लेकिन ज़िन्दगी नहीं।",
//       author: "गुलज़ार",
//     },
//     {
//       quote:
//         "चुपके चुपके रात दिन आँसू बहाना याद है, हमको अब तक आशिकी का वो ज़माना याद है।",
//       author: "हसरत जयपुरी",
//     },
//     {
//       quote:
//         "जो हम पे गुज़री है, तुझ पे भी गुज़र जाती, तेरे तो बस आँखों में आँसू भर आते हैं।",
//       author: "गुलज़ार",
//     },
//     {
//       quote:
//         "मिल ही जाएगा कभी दिल को यकीं रहता है, वो इसी शहर की गलियों में कहीं रहता है।",
//       author: "निदा फ़ाज़ली",
//     },
//     {
//       quote:
//         "दिल की बर्बादियों का कोई जश्न मनाता क्यों है, दिल को दिल से मिलाता क्यों है।",
//       author: "राहत इन्दोरी",
//     },
//   ],
// };
// function getQuotes(Data) {
//   quotesData = JSON.parse(Data);
//   console.log("quotesData");
//   console.log(quotesData);
// }

function getRandomQuote() {
  return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
  ];
}

function getQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  //   $("#tweet-quote").attr(
  //     "href",
  //     "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
  //       encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  //   );

  //   $("#tumblr-quote").attr(
  //     "href",
  //     "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
  //       encodeURIComponent(currentAuthor) +
  //       "&content=" +
  //       encodeURIComponent(currentQuote) +
  //       "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
  //   );

  $(".quote-text").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#text").text(randomQuote.quote);
  });

  $(".quote-author").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#author").html(randomQuote.author);
  });

  var color = Math.floor(Math.random() * colors.length);
  $("html body").animate(
    {
      backgroundColor: colors[color],
      color: colors[color],
    },
    1000
  );
  $(".button").animate(
    {
      backgroundColor: colors[color],
    },
    1000
  );
}

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });

  $("#new-quote").on("click", getQuote);
});
