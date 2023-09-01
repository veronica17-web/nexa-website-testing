import React, { useState } from "react";
import Header from "../Header/Header";
// import { blogsData } from '../../constants/blogsData';

export const blogData = [
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0000_telanganatoday.webp",
    ref: "https://telanganatoday.com/maruti-suzukis-iconic-suv-the-jimny-hits-hyderabad-roads",
    title: "MARUTI SUZUKI’S ICONIC SUV, THE JIMNY HITS HYDERABAD ROADS",
    subTitle:
      "The keys were handed over to customers by Jayesh Ranjan and Vinay Saboo, Chairman & Managing Director in the presence of senior officials from Maruti Suzuki.",
    publishedBy: "Telangana Today",
    date: "24 JUNE 2023",
    desc: `Hyderabad: Hyderabad's first batch of the iconic SUV from Maruti Suzuki, the Jimny was delivered to customers at NEXA Lumbini, RKS Motor Pvt Ltd. The delivery ceremony had the presence of Jayesh Ranjan, Principal Secretary for Information Technology, Electronics & Communications (ITE&C)
    The keys were handed over to customers by Jayesh Ranjan and Vinay Saboo, Chairman & Managing Director in the presence of senior officials from Maruti Suzuki.
    
    Tanay Saboo, Chief Growth Officer said the bookings of the SUV were very good and added, “about 250 cars have already been booked by customers at our Nexa Jubilee and Nexa Lumbini showrooms.”
    
    The Jimny is the 3rd SUV to be launched in the past one year following Grand Vitara and Fronx. The Jimny is designed for function and is available with a K15B 1.5-litre petrol engine. The SUV offers best in class Safety features, All Grip Pro technology, 6 Airbags on a Ladder Frame Chassis.`,
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0001_dc.webp",
    ref: "https://www.deccanchronicle.com/business/autos/210623/maruti-suzuki-jimny-hits-hyderabad-roads.html",
    title: "MARUTI SUZUKI JIMNY HITS HYDERABAD ROADS",
    subTitle:
      "The first batch of the iconic SUV from Maruti Suzuki, the Jimny was delivered to customers in Hyderabad here at NEXA Lumbini, RKS Motors on Wednesday. Principal Secretary for ITE&C, Jayesh Ranjan, IAS, was the chief guest at the delivery ceremony.",
    publishedBy: "Deccan Chronicle",
    date: "21 JUNE 2023",
    desc: `HYDERABAD: The first batch of the iconic SUV from Maruti Suzuki, the Jimny was delivered to customers in Hyderabad here at NEXA Lumbini, RKS Motors on Wednesday. Principal Secretary for ITE&C, Jayesh Ranjan, IAS, was the chief guest at the delivery ceremony, where he, along with RKS motors CMD VInay Saboo, handed over the keys of the vehicles to the customers.

    Chief growth officer, Tanay Saboo said that the bookings of the SUV are very good with about 250 cars already being booked by customers at Nexa Jubilee and Nexa Lumbini showrooms.
    
    The Jimny is the third SUV to be launched by Maruti Suzuki in the last one year following Grand Vitara and Fronx.
    
    The Jimny is designed for function and is available with a K15B 1.5-litre petrol engine. The SUV offers best in class safety features, all grip pro technology, 6 AIRBAGS on a ladder frame chassis.
    
    The Jimny now in its fourth generation with 5 decades of legacy, has always been a popular model overseas. Released in a 5-speed manual and 4-speed automatic transmission system, the customers also have a choice of 6 colours to choose from.
    
    Saboo RKS Group has always been at the forefront of delivering exceptional customer experience and unwavering commitment to customer satisfaction is reflected in our extensive state-of-the-art facilities throughout our network and our belief in the 'Customers for Life' concept.`,
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0002_hindimilap.webp",
    ref: "http://webmilap.com/articlepage.php?articleid=HINDIMIL_HIN_20230622_3_18&width=226px&edition=Hindi%20Milap&curpage=3",
    title:
      "आरकेएस मोटर्स पर मारुति सुजुकी ने ग्राहकों को सौंपी पहली जिम्नी एसयूवी",
    subTitle: "",
    publishedBy: "हिन्दी मिलाप",
    date: "21 जून 2023",
    desc: `हैदराबाद, 21 जून - (मिलाप ब्यूरो) मारुति सुजुकी की प्रतिष्ठित एसयूवी जिम्नी का हैदराबाद का पहला बैच आज नेक्सा लुम्बिनी, आरकेएस मोटर्स प्राइवेट लिमिटेड में ग्राहकों को सौंपा गया। मुख्य अतिथि के रूप में उपस्थित आईटी विभाग के प्रधान आईटी सचिव जयेश रंजन ने ग्राहक को चाभियाँ सौंपी। अवसर पर मारुति सुजुकी के वरिष्ठ अधिकारियों के अलावा नेक्सा लुम्बिनी, आरकेएस मोटर्स अध्यक्ष एवं प्रबंध निदेशक विनय साबू उपस्थित थे।
    मुख्य विकास अधिकारी तनय साबू ने कहा कि एसयूवी की बुकिंग काफी उत्साहजनक है। नेक्सा जुबली और नेक्सा लुम्बिनी शोरूम में ग्राहकों द्वारा लगभग 250 कारें पहले ही बुक की जा चुकी हैं। प्रतिक्रिया बेहद संतोषजनक रही है। उन्होंने बताया कि जिम्नी ग्रैंड विटारा और फ्रॉक्स के बाद पिछले 1 साल में लांच होने वाली तीसरी एसयूवी है। इसमें एसयूवी श्रेणी में सर्वश्रेष्ठ सुरक्षा विशेषताएँ, ऑल ग्रिप प्रो तकनीक, लैडर फ्रेम चेसिस पर 6 एयरबैग आदि उल्लेखनीय है। विनय साबू ने कहा कि साबू आरकेएस ग्रुप हमेशा असाधारण ग्राहक अनुभव देने में सबसे आगे रहा है। ग्राहकों की संतुष्टि के प्रति पूरी प्रतिबद्धता के साथ अत्याधुनिक सेवाएँ प्रदान की जा रही हैं।`,
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0003_v6velugu.webp",
    ref: "https://epaper.v6velugu.com/c/72746567",
    title: "హైదరాబాద్ కస్టమర్ల చేతికి జిమ్మీ",
    subTitle:
      "మారుతి సుజుకి ఇటీవల విడుదల చేసిన జిమ్ని హైదరాబాద్ మార్కెట్ లోకి ప్రేవేశించింది. సెక్రెటేరియేట్ సమీపం లోని నెక్సా షోరూం నుంచి డెలివరీలు మొదలయ్యాయి.",
    publishedBy: "వెలుగు",
    date: "22 June 2023",
    desc: `మారుతీ సుజుకి ఇటీవల లాంచ్ చేసిన ఎసయూవీ జిమ్నీ హైదరాబాద్ లో మార్కెట్లోకి వచ్చింది. సెక్రటేరియట్ సమీపంలోని నెక్సా షోరూమ్ నుంచి డెలివరీలు మొదలయ్యాయి. తెలంగాణ ఐటీ, పరిశ్రమలు శాఖ ప్రిన్సిపల్ సెక్రటరీ జయేష్ రంజన్ కార్యక్రమానికి చీఫ్ గెస్ట్ గా వచ్చారు. మారుతీ సుజుకీ, సబూ మోటార్స్ సీనియర్ అధికారుల సమక్షంలో తాళాలను కస్టమర్లకు అందజేశారు. ఈ ఎసియూవీ కోసం ఇప్పటికే 250 బుకింగ్స్ వచ్చాయని సబూ మోటార్స్ తెలిపింది.
    `,
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0003_v6velugu.webp",
    ref: "https://www.suryaepaper.com/clip/120388",
    title:
      "హైదరాబాద్ లో అందుబాటులోకి మారుతీ సుజుకి ఐకానిక్ ఎస్ యూవి, ది జిమ్నీ",
    subTitle: "",
    publishedBy: "సూర్య",
    date: "22 June 2023",
    desc: `హైదరాబాద్, మేజర్ న్యూస్: మారుతి సుజుకి నుండి హైదరాబాద్ యొక్క మొదటి బ్యాచ్ ఐకానిక్ ఎస్ యూ వి, జిమ్నీ బుధవారం నెక్సా లుంబినీ, ఆర్ కె ఎస్. మోటార్ ప్రైవేట్ లిమిటెడ్లో సంతోషకరమైన కస్టమర్లకు డెలివరీ చేయబడింది. తెలంగాణ ప్రభుత్వ ఇన్ఫర్మేషన్ టెక్నాలజీ, ఎలక్ట్రానిక్స్ కమ్యూనికేషన్స్ (ఐ టి ఇ సి). పరిశ్రమలు వాణిజ్య శాఖల ప్రిన్సిపల్ సెక్రటరీ ఐ ఏ ఎస్ జయేష్ రంజన్ ముఖ్య అతిథిగా హాజరవ్వగా గ్రాండ్ డెలివరీ వేడుక నిర్వహించారు. మారుతీ సుజుకీకి చెందిన సీనియర్ అధికారుల సమక్షంలో ముఖ్య అతిథి వినయ్ సబ. చైర్మన్ మేనేజింగ్ డైరెక్టర్ కీలను వినియోగదారులకు అందజేశారు. ఎన్యూవీ బుకింగ్లు చాలా బాగున్నాయని చీఫ్ గ్రోత్ ఆఫీసర్ శ్రీ తనయ్ సబూ తెలిపారు. మా నెక్సా జూబ్లీ, నెక్సా లుంబినీ షోరూమ్లులో ఇప్పటికే దాదాపు 250 కార్లను కస్టమర్లు బుక్ చేసుకున్నారు. నెలల తరబడి వెయిటింగ్ పీరియడ్లో స్పందన చాలా సంతృఎప్తికరంగా ఉందన్నారు. జిమ్స్ గ్రాండ్ విటారా, ఫ్రాంక్స్ తర్వాత గత 1 సంవత్సరంలో ప్రారంభించబడిన 3వ ఎస్ యూ వి`,
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0003_v6velugu.webp",
    ref: "https://epaper.prabhanews.com/article/Hyderabad?OrgId=226e25ddf97&eid=19&imageview=1&standalone=1&device=desktop",
    title: "హైదరాబాద్ రోడ్లపైకి ప్రవేశించిన ఐకానిక్ ఎస్ యూవీ జిమ్నీ",
    subTitle: "",
    publishedBy: "ఆంధ్రప్రభ",
    date: "22 June 2023",
    desc: `హైదరాబాద్, జూన్ 21 (గ్రభ న్యూస్): మారుతి సుజుకి నుండి హైదరాబాద్ మొదటి బ్యాచ్ ఐకానిక్ ఎస్ యూవీ, జిమ్నీ బుధవారం నెక్సా లుంబినీ, ఆర్కేఎస్ మోటార్ ప్రైవేట్ లిమిటెడ్లో సంతోషకరమైన కస్టమ ర్ లకు డెలివరీ చేయబడింది.

    తెలంగాణ ప్రభుత్వ ఇన్ఫర్మేషన్ టెక్నాలజీ, ఎలక్ట్రానిక్స్ అండ్ కమ్యూనికేషన్స్ (ఐటీఈఅండ్ సీ) పరిశ్రమలు అండ్ వాణిజ్య శాఖల ప్రిన్సిపల్ సెక్రటరీ జయేష్ రంజన్, ఐఏఎస్ ముఖ్య అతిథిగా హాజరు కాగా. గ్రాండ్ డెలివరీ వేడుక జరిగిం ది. మారుతీ సుజుకీకి చెందిన సీనియర్ అధికారుల సమక్షంలో ముఖ్య అతిథి, వినయ్ సబూ, చైర్మన్ అండ్ మేనె జింగ్ డైరెక్టర్ కీలను వినియోగదారులకు అందజేశారు. ఎస్ యూవీ బుకింగ్లు చాలా బాగున్నాయని చీఫ్ గ్రోత్ ఆఫీసర్ తనయ్ సబూ తెలిపారు.
    తమ నెక్సా జూబ్లీ, నెక్సా లుంబినీ షోరూమ్లలో ఇప్పటికే దాదాపు 250 కార్లను కస్టమర్లు బుక్ చేసుకు న్నారన్నారు. నెలల తరబడి వెయిటింగ్ పీరియడ్తో స్పందన చాలా సంతృప్తికరంగా ఉందన్నారు. జిమ్నీ గ్రాండ్ విటారా, ఫ్రాంక్స్ తర్వాత గత 1 సంవత్సరంలో ప్రారంభించ బడిన 3వ ఎస్ యూవీ ఇదని అన్నారు.`,
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0006_thehansindia.webp",
    ref: "https://www.thehansindia.com/business/maruti-suzuki-delivers-jimny-to-customers-804645",
    title: "MARUTI SUZUKI DELIVERS JIMNY TO CUSTOMERS",
    subTitle:
      "Maruti Suzuki has delivered Jimny SUV to customers at Nexa Lumbini, RKS Motor, Hyderabad on Wednesday.",
    publishedBy: "The Hans India",
    date: "22 JUNE 23",
    desc: `Maruti Suzuki has delivered Jimny SUV to customers at Nexa Lumbini, RKS Motor, Hyderabad on Wednesday. The keys were handed over to customers by Jayesh Ranjan, Principal Secretary, ITE&C, Government of Telangana, and Vinay Saboo, Chairman and Managing Director, RKS Motor, in the presence of Senior Officials from Maruti Suzuki. TanaySaboo, Chief Growth Officer, RKS Motor, said: “The bookings of the SUV are very good. About 250 cars have already been booked by customers at our Nexa Jubilee and Nexa Lumbini showrooms and the response has been highly satisfactory with the waiting period running into months.” The Jimny is third SUV to be launched in the past 1 year following Grand Vitara and Fronx. The SUV is designed for function and is available with a K15B 1.5-litre petrol engine. The SUV offers best in class safety features, All Grip Pro technology, six airbags on a Ladder Frame Chassis.

    https://www.thehansindia.com/business/maruti-suzuki-delivers-jimny-to-customers-804645`,
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/blogScreen/1.webp",
    ref: "https://www.youtube.com/watch?v=xzxj3rTLi10",
    title: "FROM LUNA TO MARUTI - HOW VINAY SABOO BUILT HIS BUSINESS",
    subTitle:
      "Today, RKS Saboo has 4 Arena, 2 Nexa showrooms and 7 workshops spread across the twin cities of Hyderabad and Secunderabad.",
    publishedBy: "HYBIZTV",
    date: "30 Jan 2020",
    desc: ``,
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/4.webp",
    ref: "",
    title: "GRAND LAUNCH OF SUZUKI JIMNY AT OUR NEXA LUMBINI",
    subTitle:
      "Don't miss the opportunity to feast your eyes on these extraordinary masterpieces!",
    publishedBy: "",
    date: "",
    desc: `Step into the world of automotive excellence and explore our captivating gallery of new car unveilings. Get ready to be awestruck as you witness the perfect blend of innovation, design, and cutting-edge technology.`,
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/grand-vitara-blogpost-19-jul.webp",
    ref: "https://www.zigwheels.com/news-features/hybrid-vehicle-news/maruti-suzuki-grand-vitara-hybrid-will-alert-pedestrians-but-theres-a-catch/50447/#leadform",
    title:
      "Maruti Suzuki Grand Vitara Hybrid Will Alert Pedestrians, But There’s A Catch!",
    subTitle:
      "It emits a low-level sound, alerting pedestrians while being driven in EV-only mode",
    publishedBy: "ZIGWHEELS",
    date: "18 July 2023",
    desc: `Maruti Suzuki has introduced a new safety feature in the strong-hybrid variants of the Grand Vitara. Called the  ‘Acoustic Vehicle Alerting System’, it emits a low alert sound that can be heard up to five feet away, to denote that the vehicle is approaching them. This new feature comes at a small premium on the Grand Vitara’s hybrid variants, prices for which have been increased by up to Rs 4,000. 

    A hybrid powertrain switches between petrol and electric power depending on the battery’s charge levels. And some hybrids offer a pure EV mode, provided there’s sufficient juice in the battery. We all know how quiet the vehicle can be when it’s driven on electric power, which may be detrimental to  pedestrians, who may not even know that the vehicle is approaching! 

    As a result, Maruti Suzuki has introduced this small but important safety feature, which alerts people when the car is approaching them. It’s invaluable in terms of pedestrian safety and found in a lot of high-end EVs such as the Kia EV6. It still remains to be seen if existing owners will get this small safety feature.
    To know our impressions on the Maruti Suzuki Grand Vitara, head to our detailed first drive review. Prices for the Grand Vitara range from Rs 10.7 lakh to Rs 19.79 lakh (ex-showroom), and it locks horns with the Hyundai Creta, Volkswagen Taigun, Toyota Hyryder, Skoda Kushaq. In the future, it’ll also go up against the upcoming Honda Elevate, 2023 Kia Seltos and Citroen C3 Aircross.
`,
  },
  {
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/grand-vitara-blogpost-2-19july.webp",
    ref: "https://auto.hindustantimes.com/auto/cars/maruti-suzuki-grand-vitara-hybrid-suv-price-hiked-after-addition-of-this-new-safety-feature-41689648973634.html",
    title:
      "MARUTI GRAND VITARA HYBRID SUV PRICE HIKED. CHECK HOW MUCH MORE ONE NEEDS TO PAY.",
    subTitle:
      "Maruti Suzuki has increased the price of its flagship compact SUV Grand Vitara from Monday, July 17.",
    publishedBy: "HT Auto",
    date: "18 July 2023",
    desc: ` Maruti Suzuki has increased the price of its flagship compact SUV Grand Vitara from Monday, July 17. The carmaker said that the price of the SUV will now go up by ₹ 4000 for all the strong hybrid variants with immediate effect. The reason behind the price hike is the addition of a new safety feature in the Grand Vitara strong hybrid versions. The SUV, which is a technical cousin of the Toyota Urban Cruiser HyRyder, rivals the likes of Hyundai Creta, Kia Seltos among others.
    Maruti Suzuki said that the hybrid variants of the Grand Vitara SUV will now come with a new pedestrian safety feature. In a regulatory filing on Monday.Maruti Suzuki said the Acoustic Vehicle Alerting System (AVAS) for the intelligent electric hybrid variants of the Grand Vitara will cost another ₹ 4,000 on the existing ex-showroom price.
    The safety feature is key to help 'drivers and pedestrians safe by alerting them about the presence of a vehicle, said Maruti Suzuki in the regulatory filing. The Acoustic Vehicle Alerting System emits alarm sound which can be heard up to five feet away. The new safety feature has been added to meet upcoming vehicle safety regulations`,
  },
];

const BlogPage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Header col={true} />
      <div className="container mx-auto p-4 pt-16 md:pt-20 pb-6 px-2 lg:px-0 ">
        <div className=" md:text-center text-red-600  pb-2 pt-2  text-5xl  uppercase font-medium ">
          NEWS & Social Media Articles
        </div>

        <div className="text-xl mb-3 lg:mb-8 md:text-center">
          Stay up to date with the latest activity from your favorite Maruti
          Suzuki Nexa Dealer!
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className="col-span-1 lg:col-span-2">
            <div className=" text-xl sm:text-3xl lg:text-4xl uppercase font-medium ">
              {/* Maruti Suzuki Jimny hits Hyderabad roads */}
              {blogData[selected].title}
            </div>
            <div className="md:flex lg:gap-4 justify-between">
              <div className="my-2 md:my-4 w-min whitespace-nowrap rounded">
                Published by: {blogData[selected].publishedBy}
              </div>
              <div className="my-2 md:my-4 w-min whitespace-nowrap rounded">
                Published on: {blogData[selected].date}
              </div>
            </div>
            <img
              src={blogData[selected].img}
              alt="Grand Launch of Suzuki Jimny at our Nexa Lumbini"
              className=" object-cover rounded-2xl overflow-hidden shadow-lg shadow-gray-500 bg-black saturate-200"
            />
            <div className="my-4 indent-8 text-justify lg:text-lg">
              {blogData[selected].desc}
            </div>
            <div className="my-4  lg:text-lg italic">
              News link: <br className="md:hidden" />
              <a href={blogData[selected].ref} target="_blank" rel="noreferrer" className="ml-1 underline  text-blue-600">
                {blogData[selected].ref}
              </a>
            </div>
          </div>
          <div className="col-span-1  overflow-x-hidden pb-2 px-2">
            {/* <div className="col-span-1 lg:max-h-[70vh] lg:overflow-y-scroll overflow-x-hidden pb-2 px-2"> */}
            <div className="mb-2 text-lg border-b ">All News</div>
            {blogData.map((x, i) => (
              <div
                key={i} // Adding a unique key for each mapped element is important in React
                className="flex gap-4 flex-row border-b py-1 cursor-pointer group hover:shadow-lg shadow-gray-500 lg:px-2 hover:rounded-lg"
                onClick={() => setSelected(i)}
              >
                <img
                  src={x.img}
                  alt={x.title}
                  className="rounded-lg overflow-hidden brightness-110 h-24 lg:h-auto lg:w-1/3 group-hover:scale-95 duration-500"
                />

                <div className="w-2/3 flex flex-col justify-around gap-4 group-hover:scale-105 duration-500">
                  <div>
                    <div className="pb-2  ">{x.title}</div>
                    <div className="flex justify-between">
                      <div className="pb-2 text-gray-600 text-sm ">
                        {x.publishedBy}
                      </div>
                      <div className="pb-2 text-gray-600 text-sm">{x.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
