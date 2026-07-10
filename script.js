const text = {

en:{
    correct:"Correct!",
    wrong:"Oops!",
    next:"Next Question",
    retry:"Retry Quiz"
},

zh:{
    correct:"正确！",
    wrong:"错误！",
    next:"下一题",
    retry:"重新测验"
},

ms:{
    correct:"Betul!",
    wrong:"Salah!",
    next:"Soalan Seterusnya",
    retry:"Cuba Lagi"
},

th:{
    correct:"ถูกต้อง!",
    wrong:"ไม่ถูกต้อง!",
    next:"ข้อถัดไป",
    retry:"ทำแบบทดสอบอีกครั้ง"
},

id:{
    correct:"Benar!",
    wrong:"Salah!",
    next:"Pertanyaan Berikutnya",
    retry:"Ulangi Kuis"
},

hi:{
    correct:"सही!",
    wrong:"गलत!",
    next:"अगला प्रश्न",
    retry:"क्विज़ फिर से करें"
},

ar:{
    correct:"صحيح!",
    wrong:"خطأ!",
    next:"السؤال التالي",
    retry:"إعادة الاختبار"
},

tl:{
    correct:"Tama!",
    wrong:"Mali!",
    next:"Susunod na Tanong",
    retry:"Subukang Muli"
}

};
const quiz = [

{
    no:1,

question:{
    en:"Are these actions acceptable?",
    zh:"这些行为可以接受吗？",
    ms:"Adakah tindakan ini boleh diterima?",
    th:"การกระทำเหล่านี้ยอมรับได้หรือไม่?",
    id:"Apakah tindakan ini dapat diterima?",
    hi:"क्या ये कार्य स्वीकार्य हैं?",
    ar:"هل هذه التصرفات مقبولة؟",
    tl:"Katanggap-tanggap ba ang mga gawaing ito?"
},

choices:{
    en:["Correct","Wrong"],
    zh:["正确","错误"],
    ms:["Betul","Salah"],
    th:["ถูกต้อง","ไม่ถูกต้อง"],
    id:["Benar","Salah"],
    hi:["सही","गलत"],
    ar:["صحيح","خطأ"],
    tl:["Tama","Mali"]
},

explanation:{
    en:"These actions are prohibited. They may cause damage to the cargo.",
    zh:"这些行为是禁止的，可能会对货物造成损坏。",
    ms:"Tindakan ini adalah dilarang. Ia boleh menyebabkan kerosakan pada kargo.",
    th:"การกระทำเหล่านี้เป็นสิ่งต้องห้าม เพราะอาจทำให้สินค้าเสียหายได้",
    id:"Tindakan ini dilarang karena dapat menyebabkan kerusakan pada muatan.",
    hi:"ये कार्य निषिद्ध हैं। इससे कार्गो को नुकसान पहुँच सकता है।",
    ar:"هذه التصرفات ممنوعة، لأنها قد تتسبب في إلحاق الضرر بالشحنة.",
    tl:"Ipinagbabawal ang mga gawaing ito. Maaari itong magdulot ng pinsala sa kargamento."
},

    answer:1
},

{
    no:2,

question:{
    en:"Which is the correct way to carry lashing hooks?",
    zh:"哪种携带绑扎钩的方法是正确的？",
    ms:"Apakah cara yang betul untuk membawa cangkuk lashing?",
    th:"วิธีใดคือวิธีที่ถูกต้องในการถือขอเกี่ยวลาชชิ่ง?",
    id:"Manakah cara yang benar untuk membawa kait lashing?",
    hi:"लैशिंग हुक ले जाने का सही तरीका कौन-सा है?",
    ar:"ما هي الطريقة الصحيحة لحمل خطافات التثبيت؟",
    tl:"Alin ang tamang paraan ng pagdadala ng lashing hooks?"
    },

    choices:{
        en:["A","B","C"],
        zh:["A","B","C"],
        ms:["A","B","C"],
        th:["A","B","C"],
        id:["A","B","C"],
        hi:["A","B","C"],
        ar:["A","B","C"],
        tl:["A","B","C"]
    },

explanation:{
    en:"Keeping the hook below knee level is the correct method. If the hook is carried too high, it may swing and strike the cargo, causing damage.",
    zh:"正确的方法是将绑扎钩保持在膝盖以下。如果钩子拿得过高，可能会摆动并撞到货物，造成损坏。",
    ms:"Cara yang betul ialah membawa cangkuk di bawah paras lutut. Jika dibawa terlalu tinggi, cangkuk boleh berayun dan terkena kargo sehingga menyebabkan kerosakan.",
    th:"วิธีที่ถูกต้องคือถือขอเกี่ยวให้อยู่ต่ำกว่าระดับหัวเข่า หากถือสูงเกินไป ขอเกี่ยวอาจแกว่งและกระแทกสินค้าจนเกิดความเสียหายได้",
    id:"Cara yang benar adalah membawa kait di bawah lutut. Jika dibawa terlalu tinggi, kait dapat berayun dan mengenai muatan sehingga menyebabkan kerusakan.",
    hi:"हुक को घुटने के स्तर से नीचे रखना सही तरीका है। यदि हुक बहुत ऊपर रखा जाए, तो वह झूलकर कार्गो से टकरा सकता है और नुकसान पहुँचा सकता है।",
    ar:"الطريقة الصحيحة هي حمل الخطاف أسفل مستوى الركبة. إذا تم حمله في مستوى مرتفع، فقد يتأرجح ويصطدم بالحمولة مما يسبب تلفها.",
    tl:"Ang tamang paraan ay panatilihin ang hook sa ibaba ng tuhod. Kapag masyadong mataas ang pagkakahawak dito, maaari itong umindayog at tumama sa kargamento na magdudulot ng pinsala."
},

    answer:0
},

{
    no:3,

question:{
    en:"Is this the correct procedure?",
    zh:"这是正确的作业步骤吗？",
    ms:"Adakah ini prosedur yang betul?",
    th:"นี่เป็นขั้นตอนการทำงานที่ถูกต้องหรือไม่?",
    id:"Apakah ini prosedur yang benar?",
    hi:"क्या यह सही कार्य प्रक्रिया है?",
    ar:"هل هذا هو الإجراء الصحيح؟",
    tl:"Ito ba ang tamang pamamaraan?"
},

choices:{
    en:["Correct","Wrong"],
    zh:["正确","错误"],
    ms:["Betul","Salah"],
    th:["ถูกต้อง","ไม่ถูกต้อง"],
    id:["Benar","Salah"],
    hi:["सही","गलत"],
    ar:["صحيح","خطأ"],
    tl:["Tama","Mali"]
},

explanation:{
    en:"The correct procedure is to start lashing from the second vehicle to prevent the vehicle from striking the lasher.",
    zh:"正确的作业方法是从第二辆车开始绑扎，以防止车辆撞到绑扎作业人员。",
    ms:"Prosedur yang betul ialah memulakan kerja lashing dari kenderaan kedua untuk mengelakkan kenderaan melanggar pekerja lashing.",
    th:"ขั้นตอนที่ถูกต้องคือเริ่มทำการลาชชิ่งจากรถคันที่สอง เพื่อป้องกันไม่ให้รถชนผู้ปฏิบัติงานลาชชิ่ง",
    id:"Prosedur yang benar adalah memulai pemasangan lashing dari kendaraan kedua untuk mencegah kendaraan menabrak petugas lashing.",
    hi:"सही प्रक्रिया यह है कि लैशिंग दूसरे वाहन से शुरू की जाए, ताकि वाहन लैशिंग कर्मी से न टकराए।",
    ar:"الإجراء الصحيح هو بدء التثبيت من المركبة الثانية لمنع اصطدام المركبة بعامل التثبيت.",
    tl:"Ang tamang pamamaraan ay simulan ang pagla-lashing mula sa pangalawang sasakyan upang maiwasang mabangga ng sasakyan ang lasher."
},
    answer:1
},

{
    no:4,

question:{
    en:"Is it the correct procedure to prepare the rear lashing for the next convoy vehicles?",
    zh:"提前为下一组车辆准备后部绑扎是否是正确的作业方法？",
    ms:"Adakah prosedur yang betul untuk menyediakan lashing belakang bagi kenderaan konvoi seterusnya?",
    th:"การเตรียมลาชชิ่งด้านหลังสำหรับรถขบวนถัดไปล่วงหน้า เป็นขั้นตอนที่ถูกต้องหรือไม่?",
    id:"Apakah benar menyiapkan lashing belakang terlebih dahulu untuk kendaraan konvoi berikutnya?",
    hi:"क्या अगली कतार के वाहनों के लिए पीछे की लैशिंग पहले से तैयार करना सही प्रक्रिया है?",
    ar:"هل يُعد تجهيز وسائل التثبيت الخلفية مسبقًا للمركبات التالية في القافلة إجراءً صحيحًا؟",
    tl:"Tama bang ihanda nang maaga ang rear lashing para sa susunod na convoy ng mga sasakyan?"
    },

choices:{
    en:["Correct","Wrong"],
    zh:["正确","错误"],
    ms:["Betul","Salah"],
    th:["ถูกต้อง","ไม่ถูกต้อง"],
    id:["Benar","Salah"],
    hi:["सही","गलत"],
    ar:["صحيح","خطأ"],
    tl:["Tama","Mali"]
    },

explanation:{
    en:"Prepare the rear lashings in advance before the next convoy arrives. Carrying lashing equipment in narrow spaces increases the risk of damaging the vehicle.",
    zh:"应在下一组车辆到达前提前准备好后部绑扎。在狭窄区域搬运绑扎器具会增加车辆受损的风险。",
    ms:"Sediakan lashing belakang lebih awal sebelum konvoi seterusnya tiba. Membawa peralatan lashing di kawasan sempit meningkatkan risiko kerosakan pada kenderaan.",
    th:"ควรเตรียมลาชชิ่งด้านหลังไว้ล่วงหน้าก่อนที่รถขบวนถัดไปจะมาถึง การถืออุปกรณ์ลาชชิ่งในพื้นที่แคบเพิ่มความเสี่ยงที่รถจะเสียหาย",
    id:"Siapkan lashing belakang terlebih dahulu sebelum kendaraan berikutnya tiba. Membawa peralatan lashing di area sempit meningkatkan risiko kerusakan pada kendaraan.",
    hi:"अगले वाहन समूह के आने से पहले पीछे की लैशिंग तैयार कर लें। संकरे स्थान में लैशिंग उपकरण ले जाने से वाहन को नुकसान पहुँचने का जोखिम बढ़ जाता है।",
    ar:"قم بتجهيز وسائل التثبيت الخلفية مسبقًا قبل وصول المركبات التالية. إن حمل معدات التثبيت في الأماكن الضيقة يزيد من خطر إتلاف المركبة.",
    tl:"Ihanda muna ang rear lashings bago dumating ang susunod na convoy. Ang pagdadala ng lashing equipment sa makikitid na lugar ay nagpapataas ng panganib na masira ang sasakyan."

},
    answer:0
},

{
    no:5,

question:{
    en:"Which lashing method is correct?",
    zh:"哪种绑扎方式是正确的？",
    ms:"Kaedah lashing yang manakah betul?",
    th:"วิธีการลาชชิ่งแบบใดถูกต้อง?",
    id:"Metode lashing manakah yang benar?",
    hi:"सही लैशिंग विधि कौन-सी है?",
    ar:"ما هي طريقة التثبيت الصحيحة؟",
    tl:"Aling paraan ng lashing ang tama?"
    },

    choices:{
        en:["A","B"],
        zh:["A","B"],
        ms:["A","B"],
        th:["A","B"],
        id:["A","B"],
        hi:["A","B"],
        ar:["A","B"],
        tl:["A","B"]
    },

explanation:{
    en:"Secure the lashing to the leaf/rear spring. Never attach the lashing to the support bracket. Doing so may damage the bolts and nuts.",
    zh:"应将绑扎固定在钢板弹簧（后弹簧）上，切勿固定在支架上，否则可能损坏螺栓和螺母。",
    ms:"Pasangkan lashing pada spring daun/spring belakang. Jangan sekali-kali memasang lashing pada pendakap sokongan kerana ia boleh merosakkan bolt dan nat.",
    th:"ยึดลาชชิ่งกับแหนบ (Rear Spring) ห้ามยึดกับขายึดรองรับ เพราะอาจทำให้สลักเกลียวและน็อตเสียหายได้",
    id:"Pasang lashing pada pegas daun (rear spring). Jangan pernah memasangnya pada bracket penyangga karena dapat merusak baut dan mur.",
    hi:"लैशिंग को लीफ/रियर स्प्रिंग पर लगाएँ। इसे सपोर्ट ब्रैकेट पर कभी न लगाएँ, क्योंकि इससे बोल्ट और नट क्षतिग्रस्त हो सकते हैं।",
    ar:"ثبّت وسيلة التثبيت على النابض الورقي (Leaf/Rear Spring). لا تثبتها أبدًا على دعامة التثبيت، لأن ذلك قد يؤدي إلى تلف البراغي والصواميل.",
    tl:"Ikabit ang lashing sa leaf/rear spring. Huwag kailanman ikabit ito sa support bracket dahil maaari nitong masira ang mga bolt at nut."
},
    answer:1
},

{
    no:6,

question:{
    en:"How many lashings are required?",
    zh:"需要使用多少条绑扎带？",
    ms:"Berapakah bilangan lashing yang diperlukan?",
    th:"ต้องใช้ลาชชิ่งกี่เส้น?",
    id:"Berapa jumlah lashing yang diperlukan?",
    hi:"कितनी लैशिंग की आवश्यकता है?",
    ar:"كم عدد وسائل التثبيت المطلوبة؟",
    tl:"Ilang lashing ang kinakailangan?"
    },

    choices:{
        en:["4","6"],
        zh:["4","6"],
        ms:["4","6"],
        th:["4","6"],
        id:["4","6"],
        hi:["4","6"],
        ar:["4","6"],
        tl:["4","6"]
    },

explanation:{
    en:"For B/L Type 2.0, as shown on the screen, cargo weighing 2.1–3.1 tons must be secured with 6 lashings (8 lashings in the athwartship direction).",
    zh:"对于 B/L Type 2.0，如画面所示，重量为2.1–3.1吨的货物必须使用6条绑扎（横向绑扎时需使用8条）。",
    ms:"Bagi B/L Type 2.0, seperti yang ditunjukkan pada skrin, kargo seberat 2.1–3.1 tan mesti diikat menggunakan 6 lashing (8 lashing bagi arah melintang kapal).",
    th:"สำหรับ B/L Type 2.0 ตามที่แสดงบนหน้าจอ สินค้าน้ำหนัก 2.1–3.1 ตัน ต้องใช้ลาชชิ่ง 6 เส้น (8 เส้น สำหรับการลาชชิ่งในแนวขวางเรือ)",
    id:"Untuk B/L Type 2.0, seperti yang ditunjukkan pada layar, muatan dengan berat 2,1–3,1 ton harus diamankan menggunakan 6 lashing (8 lashing untuk arah melintang kapal).",
    hi:"B/L Type 2.0 के लिए, स्क्रीन पर दर्शाए अनुसार, 2.1–3.1 टन वजन वाले कार्गो को 6 लैशिंग (एथवॉर्टशिप दिशा में 8 लैशिंग) से सुरक्षित करना आवश्यक है।",
    ar:"بالنسبة إلى B/L Type 2.0، كما هو موضح على الشاشة، يجب تثبيت الشحنة التي يتراوح وزنها بين 2.1 و3.1 طن باستخدام 6 وسائل تثبيت (و8 وسائل تثبيت في الاتجاه العرضي للسفينة).",
    tl:"Para sa B/L Type 2.0, tulad ng ipinapakita sa screen, ang kargang may bigat na 2.1–3.1 tonelada ay dapat itali gamit ang 6 na lashing (8 lashing kung pahilis o pahalang sa barko)."
    },

    answer:1
},

{
 no:7,

question:{
    en:"How many lashings are required?",
    zh:"需要使用多少条绑扎带？",
    ms:"Berapakah bilangan lashing yang diperlukan?",
    th:"ต้องใช้ลาชชิ่งกี่เส้น?",
    id:"Berapa jumlah lashing yang diperlukan?",
    hi:"कितनी लैशिंग की आवश्यकता है?",
    ar:"كم عدد وسائل التثبيت المطلوبة؟",
    tl:"Ilang lashing ang kinakailangan?"
    },

    choices:{
        en:["4","6"],
        zh:["4","6"],
        ms:["4","6"],
        th:["4","6"],
        id:["4","6"],
        hi:["4","6"],
        ar:["4","6"],
        tl:["4","6"]
  },

explanation:{
    en:"Add 2 additional lashings in the athwartship direction. The original lashing arrangement was insufficient, causing the cargo to move during the voyage.",
    zh:"请在横向增加2条绑扎。原有绑扎数量不足，导致货物在航行过程中发生了移动。",
    ms:"Tambahkan 2 lashing tambahan pada arah melintang kapal. Bilangan lashing asal tidak mencukupi dan menyebabkan kargo bergerak semasa pelayaran.",
    th:"เพิ่มลาชชิ่งอีก 2 เส้นในแนวขวางเรือ การลาชชิ่งเดิมไม่เพียงพอ ทำให้สินค้าขยับระหว่างการเดินเรือ",
    id:"Tambahkan 2 lashing tambahan pada arah melintang kapal. Jumlah lashing semula tidak mencukupi sehingga muatan bergeser selama pelayaran.",
    hi:"एथवॉर्टशिप दिशा में 2 अतिरिक्त लैशिंग जोड़ें। मूल लैशिंग पर्याप्त नहीं थी, जिसके कारण यात्रा के दौरान कार्गो खिसक गया।",
    ar:"أضف وسيلتي تثبيت إضافيتين في الاتجاه العرضي للسفينة. كان التثبيت الأصلي غير كافٍ، مما أدى إلى تحرك الشحنة أثناء الرحلة البحرية.",
    tl:"Magdagdag ng 2 karagdagang lashing sa athwartship direction. Hindi sapat ang orihinal na lashing kaya gumalaw ang kargamento habang nasa biyahe."
},
    answer:1
},

{
    no:8,

question:{
    en:"How many lashings are required when using a BL 6-ton belt?",
    zh:"使用 BL 6 吨绑带时，需要多少条绑扎？",
    ms:"Berapakah bilangan lashing yang diperlukan apabila menggunakan tali BL 6 tan?",
    th:"เมื่อใช้สายรัด BL ขนาด 6 ตัน ต้องใช้ลาชชิ่งกี่เส้น?",
    id:"Berapa jumlah lashing yang diperlukan saat menggunakan belt BL 6 ton?",
    hi:"BL 6-टन बेल्ट का उपयोग करते समय कितनी लैशिंग आवश्यक है?",
    ar:"كم عدد وسائل التثبيت المطلوبة عند استخدام حزام BL بقدرة 6 أطنان؟",
    tl:"Ilang lashing ang kinakailangan kapag gumagamit ng BL 6-ton belt?"
    },

    choices:{
        en:["6","8"],
        zh:["6","8"],
        ms:["6","8"],
        th:["6","8"],
        id:["6","8"],
        hi:["6","8"],
        ar:["6","8"],
        tl:["6","8"]
    },

    explanation:{
    en:"8 or more lashings are required. Insufficient lashings may allow the cargo to move during the voyage.",
    zh:"必须使用8条或以上绑扎。绑扎数量不足可能导致货物在航行过程中发生移动。",
    ms:"Sekurang-kurangnya 8 lashing diperlukan. Bilangan lashing yang tidak mencukupi boleh menyebabkan kargo bergerak semasa pelayaran.",
    th:"ต้องใช้ลาชชิ่งอย่างน้อย 8 เส้น หากลาชชิ่งไม่เพียงพอ สินค้าอาจเคลื่อนตัวระหว่างการเดินเรือ",
    id:"Diperlukan minimal 8 lashing. Lashing yang tidak mencukupi dapat menyebabkan muatan bergeser selama pelayaran.",
    hi:"कम से कम 8 लैशिंग आवश्यक हैं। अपर्याप्त लैशिंग के कारण यात्रा के दौरान कार्गो खिसक सकता है।",
    ar:"يلزم استخدام 8 وسائل تثبيت أو أكثر. قد يؤدي عدم كفاية التثبيت إلى تحرك الشحنة أثناء الرحلة البحرية.",
    tl:"Hindi bababa sa 8 lashing ang kinakailangan. Kapag kulang ang lashing, maaaring gumalaw ang kargamento habang nasa biyahe."
    },

    answer:1
},


];

let current = 0;
let score = 0;
let playerName = "";
let language = "en";

function changeLanguage(lang, button){

    language = lang;

    let buttons = document.getElementsByClassName("langBtn");

    for(let i=0;i<buttons.length;i++){

        buttons[i].classList.remove("selected");

    }

    button.classList.add("selected");

}
function showQuestion(){

    document.getElementById("quizImage").src =
        "images/" + quiz[current].no + ".png";

    document.getElementById("question").innerText =
        quiz[current].question[language];

    document.getElementById("btn1").innerText =
        quiz[current].choices[language][0];

    document.getElementById("btn2").innerText =
        quiz[current].choices[language][1];

    document.getElementById("btn1").style.display = "inline";
    document.getElementById("btn2").style.display = "inline";

    if(quiz[current].choices[language].length == 3){

        document.getElementById("btn3").innerText =
            quiz[current].choices[language][2];

        document.getElementById("btn3").style.display = "inline";

    }else{

        document.getElementById("btn3").style.display = "none";

    }

    //
    document.getElementById("result").innerText = "";

    document.getElementById("nextBtn").style.display = "none";

    document.getElementById("nextBtn").innerText =
        text[language].next;
}

function judge(choice){

    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";

    document.getElementById("question").innerText = "";

if(choice == quiz[current].answer){

    score++;

    // 正解画像
    if(quiz[current].no == 10){

        document.getElementById("quizImage").src = "images/10-1.png";

    }else{

        document.getElementById("quizImage").src =
            "images/" + quiz[current].no + "-1.png";

    }

    document.getElementById("result").innerHTML =
        "<b style='color:green'>" +
        text[language].correct +
        "</b><br><br>" +
        quiz[current].explanation[language];

}else{

    // 不正解画像
    if(quiz[current].no == 10){

        if(choice == 2){

            // Blue Direction
            document.getElementById("quizImage").src = "images/10-3.png";

        }else{

            // Red Direction
            document.getElementById("quizImage").src = "images/10-2.png";

        }

    }else{

        document.getElementById("quizImage").src =
            "images/" + quiz[current].no + "-2.png";

    }

    document.getElementById("result").innerHTML =
        "<b style='color:red'>" +
        text[language].wrong +
        "</b><br><br>" +
        quiz[current].explanation[language];

}

    document.getElementById("nextBtn").style.display = "inline";
}

function nextQuestion(){

    current++;

    if(current >= quiz.length){

        let percent = Math.round(score / quiz.length * 100);

        document.getElementById("question").innerHTML =
            "<h2>Finished!</h2>" +
            "<p><b>Name:</b> " + playerName + "</p>" +
            "<p><b>Score:</b> " + score + " / " + quiz.length + "</p>" +
            "<p><b>Accuracy:</b> " + percent + "%</p>";

        document.getElementById("quizImage").style.display = "none";
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "none";
        document.getElementById("btn3").style.display = "none";
        document.getElementById("result").innerText = "";
        document.getElementById("nextBtn").style.display = "none";

        document.getElementById("certificate").style.display = "block";

if(percent == 100){

    let today = new Date();

    let date =
    today.getFullYear() + " / " +
    (today.getMonth()+1) + " / " +
    today.getDate();

    document.getElementById("certificate").innerHTML =

    "<div class='certificate-title'>🏆 CERTIFICATE OF COMPLETION 🏆</div>" +

    "<p class='certificate-text'>This certifies that</p>" +

    "<div class='certificate-name'>" + playerName + "</div>" +

    "<p class='certificate-text'>has successfully completed</p>" +

    "<div class='certificate-name'>K-Learning</div>" +

    "<p class='certificate-text'>with a perfect score of</p>" +

    "<div class='score'>100%</div>" +

"<div class='certificate-footer'>" +

"<div>Issue Date : " + date + "</div>" +

"<div><img src='images/signature.png' style='height:60px;'></div>" +

"</div>";

}else{

document.getElementById("certificate").innerHTML =
    "<button onclick='retryQuiz()'>" +
    text[language].retry +
    "</button>";

}

        return;
    }

    showQuestion();
}

function startQuiz(){

    playerName = document.getElementById("playerName").value;

    if(playerName == ""){

        alert("Please enter your name.");
        return;

    }

    current = 0;
    score = 0;

    document.getElementById("certificate").style.display = "none";
    document.getElementById("quizImage").style.display = "block";
    document.getElementById("result").innerText = "";

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";

    showQuestion();
}

function retryQuiz(){

    current = 0;
    score = 0;

    document.getElementById("certificate").style.display = "none";

    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";

    document.getElementById("playerName").value = "";
    document.getElementById("question").innerHTML = "";

}