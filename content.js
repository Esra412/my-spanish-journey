window.JOURNEY_CONTENT = {
  categories: ["Internship", "Programming", "Daily Life", "Travel", "Culture", "Experiences"],
  categoryTranslations: {
    en: ["Internship", "Programming", "Daily Life", "Travel", "Culture", "Experiences"],
    fi: ["Harjoittelu", "Ohjelmointi", "Arki", "Matkailu", "Kulttuuri", "Kokemukset"],
    tr: ["Staj", "Programlama", "Günlük yaşam", "Seyahat", "Kültür", "Deneyimler"]
  },
  posts: [
    {
      slug: "breakthrough-successful-model-training-and-barcelona-bookings", date: "2026-11-08", category: "Internship", location: "Móra d’Ebre", image: "8_marras.jpg",
      title: { en: "A Breakthrough, Successful Model Training and Barcelona Bookings", fi: "Läpimurto, onnistunut mallikoulutus ja Barcelonan reissun varaukset", tr: "Atılım, başarılı model eğitimi ve Barselona rezervasyonları" },
      summary: {
        en: "After Emilio fixed our remote access, I completed simulation task #8 and achieved 100% success across 30 episodes. I also documented the team workflow, while the girls and I booked our Barcelona trip.",
        fi: "Emilion korjattua etäyhteyden sain simulaatiotehtävän #8 valmiiksi ja saavutin 100 % onnistumistarkkuuden 30 episodissa. Dokumentoin myös tiimin työnkulut, ja varasimme tyttöjen kanssa Barcelonan-matkan.",
        tr: "Emilio uzaktan erişim sorununu çözdükten sonra simülasyon görevi #8'i tamamlayıp 30 bölümde %100 başarı elde ettim. Ekip iş akışını da belgeledim; kızlarla Barselona gezimizi ayırttık."
      },
      paragraphs: {
        en: [
          "The day began with the message we had been waiting for from our supervisor, Emilio, who had sorted out the remote connection problems. He advised us to connect directly to the training environment by running `ssh openarm-train` from the WSL terminal.",
          "At first, the connection still briefly returned a port 22227 error (`Connection refused`), but it turned out Emilio was adding a new one-terabyte hard drive to the server at that very moment. As soon as the installation was complete, I tried connecting again, and everything worked like a dream!",
          "Once I finally had proper access to the environment, things moved quickly. I generated the simulation data and started training the ACT model in the background. I kept a close eye on memory usage and the training progress, and at last the long wait and all the earlier technical troubleshooting paid off: I completed task #8!",
          "The training results were fantastic. The 40,000-step model had been sensitive to changes in the cube’s position, succeeding in 43% of trials at random positions. With 80,000 training steps, we reached a perfect 100% success rate (30/30 episodes), both in the baseline test and in the more challenging test with ±5 cm position variation.",
          "After wrapping up the technical work, I brought together the whole team’s workflows, GPU schedule, system architecture, training metrics and responsibilities into a comprehensive English-language master document (the M1 report). It serves as an official record and progress report for both the workplace and our team. It felt incredibly rewarding to bring such a big piece of work to completion!",
          "Meanwhile, the girls went for a couple-of-hours walk across the bridge in Móra la Nova. After they got back, we all sat down together and sorted out the bookings for our upcoming Barcelona trip: we booked accommodation for three nights, from 20 to 23 November, and bought both our outbound and return train tickets. Finally, we excitedly planned the weekend and listed all the places and sights we definitely want to visit in Barcelona. It felt great to end the week having got all of that done!"
        ],
        fi: [
          "Päivä alkoi odotetulla viestillä työnohjaajaltamme Emiliolta, joka oli selvittänyt etäyhteysongelmat. Hän neuvoi meitä ottamaan yhteyden suoraan koulutusympäristöön komennolla `ssh openarm-train` WSL-terminaalin kautta.",
          "Aluksi yhteys herjasi vielä hetken portin 22227 virhettä (`Connection refused`), mutta selvisi, että Emilio oli juuri samalla hetkellä lisäämässä palvelimelle uutta yhden teratavun kiintolevyä. Heti kun asennus oli valmis ja kokeilin yhteyttä uudelleen, kaikki alkoi toimia kuin unelma!",
          "Kun vihdoin pääsin kunnolla käsiksi ympäristöön, hommat etenivät vauhdilla. Generoin simulaatiodatan valmiiksi ja käynnistin varsinaisen ACT-tekoälymallin koulutuksen taustalla. Seurasin tarkasti muistin käyttöä ja ajon etenemistä, ja lopulta pitkä odotus sekä kaikki aiempi tekninen säätäminen palkittiin: sain tehtävän #8 kokonaan valmiiksi!",
          "Koulutuksen tulokset olivat upeita. 40 000 askeleen malli oli vielä herkkä kuution paikan vaihtelulle ja onnistui satunnaisissa sijainneissa 43-prosenttisesti. Kun koulutusta jatkettiin 80 000 askeleeseen, saavutimme täydellisen 100 prosentin onnistumistarkkuuden (30/30 episodia) sekä perustestissä että haastavammassa ±5 cm:n sijaintivaihtelutestissä.",
          "Kun tekninen suoritus oli paketissa, kokosin koko tiimin työnkulut, näytönohjaimen käyttövuorolistan, järjestelmäarkkitehtuurin, koulutusmetriikat ja vastuualueet kattavaksi englanninkieliseksi päädokumentiksi eli M1-raportiksi. Se toimii virallisena näyttö- ja seurantaraporttina sekä työpaikalle että meille. Tuntui todella palkitsevalta saada näin iso kokonaisuus maaliin!",
          "Sillä välin tytöt kävivät parin tunnin lenkillä sillan toisella puolella Móra la Novassa. Lenkin jälkeen istuimme kaikki yhdessä alas ja hoidimme tulevan Barcelonan-reissun varaukset kerralla kuntoon: varasimme majoituksen kolmeksi yöksi 20.–23. marraskuuta ja ostimme valmiiksi sekä meno- että paluujunaliput. Lopuksi suunnittelimme vielä innoissamme viikonlopun ohjelmaa ja listasimme kaikki paikat ja nähtävyydet, joissa haluamme ehdottomasti Barcelonassa käydä. Kaiken tämän jälkeen oli todella hyvä fiilis päättää viikko!"
        ],
        tr: [
          "Gün, danışmanımız Emilio'dan beklediğimiz haberle başladı. Uzaktan bağlantı sorunlarını çözmüştü. WSL terminalinden `ssh openarm-train` komutunu çalıştırarak eğitim ortamına doğrudan bağlanmamızı önerdi.",
          "Başta bağlantı 22227 numaralı bağlantı noktasında (`Connection refused`) hatası vermeye devam etti. Ancak Emilio'nun tam o sırada sunucuya bir terabaytlık yeni bir sabit disk eklediği ortaya çıktı. Kurulum tamamlanır tamamlanmaz yeniden bağlanmayı denedim ve her şey harika şekilde çalıştı!",
          "Ortamıma sonunda düzgün erişim sağlayınca işler hızla ilerledi. Simülasyon verilerini oluşturdum ve ACT modelinin asıl eğitimini arka planda başlattım. Bellek kullanımını ve eğitimin ilerleyişini dikkatle takip ettim. Sonunda uzun bekleyiş ve önceki tüm teknik uğraşlar karşılığını verdi: #8 numaralı görevi tamamen bitirdim!",
          "Eğitim sonuçları müthişti. 40.000 adımlık model, küpün konumundaki değişikliklere duyarlıydı ve rastgele konumlardaki denemelerin %43'ünde başarılı oluyordu. Eğitimi 80.000 adıma çıkardığımızda hem temel testte hem de daha zor olan ±5 cm konum değişikliği testinde kusursuz %100 başarı oranına (30/30 bölüm) ulaştık.",
          "Teknik işi tamamladıktan sonra tüm ekibin iş akışlarını, GPU kullanım sırasını, sistem mimarisini, eğitim ölçümlerini ve sorumlulukları kapsamlı bir İngilizce ana belgede (M1 raporu) bir araya getirdim. Bu belge hem iş yeri hem de ekibimiz için resmî bir kanıt ve ilerleme raporu niteliğinde. Böylesine büyük bir işi tamamlamak gerçekten çok ödüllendiriciydi!",
          "Bu sırada kızlar köprünün diğer tarafındaki Móra la Nova'da birkaç saatlik yürüyüşe çıktılar. Döndüklerinde hep birlikte oturup Barselona gezimizin rezervasyonlarını hallettik: 20-23 Kasım tarihleri arasında üç gecelik konaklama ayarladık ve gidiş-dönüş tren biletlerini aldık. Son olarak hafta sonu planımızı heyecanla yaptık ve Barselona'da mutlaka görmek istediğimiz yerleri ve turistik noktaları listeledik. Bütün bunların ardından haftayı bitirmek harika hissettirdi!"
        ]
      },
      tags: ["internship", "robotics", "programming", "travel"],
      imageAlt: { en: "Illustrated placeholder for successful robot model training and Barcelona trip bookings", fi: "Kuvituksellinen paikkamerkki onnistuneesta robottimallin koulutuksesta ja Barcelonan-matkan varauksista", tr: "Başarılı robot modeli eğitimi ve Barselona gezisi rezervasyonları için temsili çizim" }
    },
    {
      slug: "technical-troubleshooting-ssh-and-barcelona-plans", date: "2026-11-07", category: "Internship", location: "Móra d’Ebre", image: "7_marras.jpg",
      title: { en: "Technical Troubleshooting, SSH Setup and Barcelona Plans", fi: "Teknistä säätöä, SSH-asetuksia ja matkasuunnitelmien hiomista", tr: "Teknik sorunlar, SSH ayarları ve Barselona planları" },
      summary: {
        en: "After learning why the robot training had stalled, I tried setting up SSH access to another Linux machine, but ran into network and permission issues. We then refined our Barcelona plans while waiting for confirmation about our keys.",
        fi: "Selvitimme robottikoulutuksen hidastumisen syyn ja yritin ottaa SSH-yhteyttä toiseen Linux-koneeseen, mutta vastaan tuli verkko- ja käyttöoikeusongelmia. Sen jälkeen hioimme Barcelonan-suunnitelmia ja jäimme odottamaan kuittausta avaimista.",
        tr: "Robot eğitiminin neden yavaşladığını öğrendikten sonra başka bir Linux makinesine SSH bağlantısı kurmayı denedim, ancak ağ ve izin sorunlarıyla karşılaştım. Ardından Barselona planlarımızı ayrıntılandırıp anahtarlarla ilgili onay beklemeye başladık."
      },
      paragraphs: {
        en: [
          "As soon as I woke up, I got back to the computer to continue yesterday’s work. Our supervisor, Emilio, replied about the problems we had run into and figured out why the training was crawling: apparently, we had not been using their powerful graphics card at all, and the memory on the machine we were using had run out. Emilio mentioned that there was another Linux machine on the network we could use if it was free.",
          "We started checking and adjusting the settings again, but it felt as if every time we fixed one problem, another obstacle appeared. Once I finally got a clean start, I needed to get a proper remote connection working to the Linux environment (`nm-mac`).",
          "Getting connected was a headache. First, my computer could not resolve the destination address because we were outside the laboratory’s local network. Emilio gave us detailed instructions for setting up the SSH config file and using a jump server. After we put the settings in place, the connection reached the jump server, but then stopped with a new error: `Permission denied` — as if our public SSH keys had not yet been accepted by the server.",
          "Since Emilio promised to check the keys from the office the next day, we put the computers aside and focused on other things. The girls and I went through our upcoming Barcelona trip in much more detail. We also thought about the end of our exchange and realised that we should definitely spend the last two nights of the trip in Barcelona. Our return flight to Finland leaves so early in the morning that there is no way we could travel from Móra d’Ebre to Barcelona Airport overnight or in the early hours. Now all that was left was to wait for Emilio to confirm the keys and then get back to work!"
        ],
        fi: [
          "Hyppäsin heti herättyäni koneen äärelle jatkamaan eilistä urakkaa. Työnohjaajamme Emilio vastasi eilisiin ongelmiimme ja selvitti, mistä koulutuksen mateleminen johtui: emme ilmeisesti käyttäneet lainkaan heidän tehokasta näytönohjaintaan, ja käytössä olleen koneen muisti oli päässyt loppumaan. Emilio vinkkasi, että verkon sisällä on toinenkin Linux-kone, jota voisimme hyödyntää, jos se olisi vapaana.",
          "Aloimme tutkia ja korjata asetuksia uudelleen, mutta homma tuntui etenevän niin, että aina kun yhden ongelman sai ratkaistua, vastaan tuli heti jokin uusi mutka. Kun vihdoin pääsin aloittamaan puhtaalta pöydältä, minun piti saada etäyhteys toimimaan kunnolla Linux-ympäristöön (`nm-mac`).",
          "Yhteyden muodostamisessa riitti päänvaivaa. Ensin tietokoneeni ei osannut tunnistaa kohdeosoitetta lainkaan, koska olimme laboratorion lähiverkon ulkopuolella. Saimme Emiliolta tarkat ohjeet SSH-asetustiedoston (`config`) määrittämiseen ja välityspalvelimen (*jump server*) käyttöön. Kun saimme asetukset paikoilleen, yhteys pääsi välityspalvelimelle asti mutta tyssäsi uuteen virheilmoitukseen (`Permission denied`), aivan kuin julkisia SSH-avaimiamme ei olisi vielä hyväksytty palvelimelle.",
          "Koska Emilio lupasi tarkistaa avainten tilanteen seuraavana päivänä toimistolta käsin, laitoimme koneet sivuun ja keskityimme muihin asioihin. Kävimme tyttöjen kanssa tulevaa Barcelonan-reissuamme läpi paljon aiempaa tarkemmin. Pohdimme myös vaihtojakson loppupuolta ja tulimme siihen tulokseen, että meidän kannattaa ehdottomasti viettää matkamme viimeiset kaksi yötä Barcelonassa. Paluulentomme Suomeen lähtee niin aikaisin aamulla, ettemme millään ehtisi matkustaa Móra d’Ebrestä Barcelonan lentokentälle yön tai aikaisen aamun aikana. Nyt ei muuta kuin odotellaan Emilion kuittausta avaimista ja jatketaan hommia!"
        ],
        tr: [
          "Uyanır uyanmaz dünkü işe devam etmek için bilgisayarın başına geçtim. Danışmanımız Emilio, karşılaştığımız sorunlarla ilgili yanıt verdi ve eğitimin neden bu kadar yavaş ilerlediğini buldu: görünüşe göre onların güçlü GPU'sunu hiç kullanmıyorduk ve kullandığımız makinenin belleği tükenmişti. Emilio, boş olması hâlinde ağdaki başka bir Linux makinesinden yararlanabileceğimizi söyledi.",
          "Ayarları yeniden inceleyip düzeltmeye başladık, ancak bir sorunu çözdüğümüzde hemen başka bir pürüz çıkıyormuş gibi hissediyorduk. Sonunda temiz bir başlangıç yapabildiğimde, Linux ortamına (`nm-mac`) düzgün bir uzaktan bağlantı kurmam gerekiyordu.",
          "Bağlantıyı kurmak epey uğraştırdı. Laboratuvarın yerel ağının dışında olduğumuz için bilgisayarım önce hedef adresi çözemedi. Emilio, SSH yapılandırma dosyasını (`config`) ayarlamak ve bir atlama sunucusu (*jump server*) kullanmak için bize ayrıntılı talimatlar verdi. Ayarları yaptıktan sonra bağlantı atlama sunucusuna kadar ulaştı, ancak yeni bir hata verdi: `Permission denied`. Sanki genel SSH anahtarlarımız sunucu tarafından henüz kabul edilmemişti.",
          "Emilio anahtarların durumunu ertesi gün ofisten kontrol edeceğine söz verince bilgisayarları bir kenara bırakıp başka işlere odaklandık. Kızlarla birlikte yaklaşan Barselona gezimizi öncekinden çok daha ayrıntılı biçimde gözden geçirdik. Değişim programımızın sonunu da düşündük ve gezimizin son iki gecesini kesinlikle Barselona'da geçirmemiz gerektiğine karar verdik. Finlandiya'ya dönüş uçağımız sabah çok erken kalkıyor; bu nedenle gece ya da sabahın erken saatlerinde Móra d’Ebre'den Barselona Havalimanı'na gitmemiz mümkün olmazdı. Şimdi Emilio'nun anahtarlarla ilgili onayını bekleyip işe devam edeceğiz!"
        ]
      },
      tags: ["internship", "programming", "remote work", "travel"],
      imageAlt: { en: "Illustrated placeholder for SSH troubleshooting and Barcelona trip planning", fi: "Kuvituksellinen paikkamerkki SSH-yhteyden selvittelystä ja Barcelonan-matkan suunnittelusta", tr: "SSH sorunlarını giderme ve Barselona gezisi planlaması için temsili çizim" }
    },
    {
      slug: "my-turn-at-robot-training-and-a-slow-run", date: "2026-11-06", category: "Internship", location: "Móra d’Ebre", image: "5_marras.jpg",
      title: { en: "My Turn at Robot Training and a Slow Start", fi: "Omaa vuoroa robottikoulutuksen parissa ja vähän haasteitakin", tr: "Robot eğitimi sırası bende ve bazı zorluklar" },
      summary: {
        en: "I took over the simulation task after Emilia ran into project issues, but confusion about the steps left the training unexpectedly slow. After asking Emilio for advice, I decided to try again with a fresh mind the next day.",
        fi: "Aloitin simulaatiotehtävän Emilian projektissa ilmenneiden ongelmien vuoksi, mutta vaiheiden kanssa oli haasteita ja koulutus eteni odottamattoman hitaasti. Kysyttyäni neuvoa Emiliolta päätin yrittää uudelleen seuraavana päivänä levänneenä.",
        tr: "Emilia'nın projesinde sorunlar çıkınca simülasyon görevini devraldım; ancak adımları karıştırınca eğitim beklenmedik biçimde yavaş ilerledi. Emilio'ya danıştıktan sonra ertesi gün dinç bir kafayla yeniden denemeye karar verdim."
      },
      paragraphs: {
        en: [
          "It was my turn to get stuck into the work. Since Emilia had run into some problems with her project, we decided to switch turns, and I started working on simulation task #8.",
          "I immediately had some difficulty getting all the commands and steps in the right order. I must have done something wrong somewhere at the beginning, because the training, which was supposed to run efficiently, was moving painfully slowly. It was meant to run for 80,000 steps, but by the time the whole day had gone by, the counter showed a mere five steps!",
          "We contacted Emilio to ask for advice: was there a way to speed things up, or had we missed an important step? Since it was already getting very late and it had been a long day, I decided to take a breather and try again the next day with a fresh mind."
        ],
        fi: [
          "Päivä oli minun vuoroni hypätä työn touhuun. Koska Emilialla oli ilmennyt omassa projektissaan ongelmia, päätimme vaihtaa vuoroa, ja minä aloitin simulaatiotehtävän #8 tekemisen.",
          "Aluksi minulla oli haasteita sisäistää kaikkien komentojen ja vaiheiden järjestys. Tein varmasti jossain kohdassa jotain väärin, sillä tehokkaasti edetä tarkoitetun koulutuksen eteneminen oli tuskastuttavan hidasta. Koulutuksen piti kestää 80 000 askelta, mutta vaikka koko päivä oli jo kulunut, mittarissa oli vasta vaivaiset viisi askelta!",
          "Otimme yhteyttä Emilioon ja kysyimme neuvoa: olisiko jokin keino nopeuttaa hommaa, tai olimmeko missanneet jonkin olennaisen vaiheen? Koska kello alkoi olla jo todella paljon ja päivä oli ollut pitkä, päätin rauhoittaa tilanteen ja ottaa uuden yrityksen heti seuraavana päivänä tuoreilla aivoilla."
        ],
        tr: [
          "İşe koyulma sırası bendeydi. Emilia'nın kendi projesinde bazı sorunlar çıkınca sırayı değiştirmeye karar verdik ve simülasyon görevi #8'e ben başladım.",
          "Başlangıçta tüm komutların ve adımların sırasını kavramakta zorlandım. Bir yerde yanlış bir şey yapmış olmalıyım; çünkü verimli ilerlemesi gereken eğitim can sıkıcı derecede yavaş ilerliyordu. Eğitimin 80.000 adım sürmesi gerekiyordu, ama koca gün geçmesine rağmen sayaçta yalnızca beş adım vardı!",
          "Emilio'ya ulaşıp danıştık: işi hızlandırmanın bir yolu var mıydı, yoksa önemli bir adımı mı atlamıştık? Saat oldukça geç olduğu ve uzun bir gün geçirdiğimiz için durumu sakin karşılayıp ertesi gün dinç bir kafayla yeniden denemeye karar verdim."
        ]
      },
      tags: ["internship", "robotics", "learning"],
      imageAlt: { en: "Illustrated placeholder for troubleshooting a robot simulation training run", fi: "Kuvituksellinen paikkamerkki robottisimulaation koulutusajon ongelmanratkaisusta", tr: "Robot simülasyonu eğitimindeki sorunları gidermek için temsili çizim" }
    },
    {
      slug: "simulation-training-and-barcelona-trip-planning", date: "2026-11-05", category: "Internship", location: "Móra d’Ebre", image: "6_marras.jpg",
      title: { en: "Simulation Training and Planning a Trip to Barcelona", fi: "Simulaatiokoulutusta ja Barcelonan-matkan suunnittelua", tr: "Simülasyon eğitimi ve Barselona gezisi planları" },
      summary: {
        en: "While Emilia worked on the simulation training and Noora monitored the GPU, we planned a four-day work trip to Barcelona. I spent the rest of the day relaxing and reading while waiting for my turn.",
        fi: "Emilian työskennellessä simulaatiokoulutuksen parissa ja Nooran valvoessa näytönohjainta suunnittelimme neljän päivän työmatkaa Barcelonaan. Loppupäivän luin ja otin rennosti omaa vuoroani odotellessa.",
        tr: "Emilia simülasyon eğitimiyle uğraşırken Noora GPU'yu takip etti; biz de Barselona'ya yapacağımız dört günlük iş gezisini planladık. Sıramı beklerken günün geri kalanında kitap okuyup dinlendim."
      },
      paragraphs: {
        en: [
          "Thursday was a calm day. Emilia continued working on the simulation task, which was first in the queue (#8), while Noora kept a close eye on the GPU in the background to make sure it stayed stable and the training run was progressing as it should.",
          "While the computers did their work and we waited for Emilia’s run to finish, the girls and I had plenty of time to plan our upcoming trip to Barcelona. We are hoping to go for four days, work directly from the main office and explore some new places at the same time. We talked about when would be the best time to go and what kind of accommodation would make the most sense: should we rent a shared Airbnb or book a hotel room?",
          "We also looked at train tickets in advance. We chose times that would leave later trains available as a backup, since Spanish train schedules are not always completely reliable — as we had already discovered on the second day of the trip, according to my travel journal! Since Emilia was still busy with her training slot, I took it easy for the rest of the day, reading a book and recharging while waiting for my turn."
        ],
        fi: [
          "Torstai sujui rauhallisesti. Emilia jatkoi ensimmäisenä vuorossa olevan simulaatiotehtävän (#8) parissa, kun taas Noora tarkkaili taustalla tiiviisti, että näytönohjain eli GPU pysyi vakaana ja koulutusajo eteni niin kuin piti.",
          "Sillä aikaa kun koneet tekivät työtään ja odottelimme Emilian ajon valmistumista, meillä oli tyttöjen kanssa hyvin aikaa suunnitella tulevaa reissuamme Barcelonaan. Tarkoituksenamme on matkustaa sinne neljäksi päiväksi työskentelemään suoraan päätoimistolle ja samalla tutustumaan uusiin paikkoihin. Pohdimme yhdessä, milloin olisi paras ajankohta lähteä ja mikä olisi järkevin tapa majoittua: ottaisimmeko yhteisen Airbnb-asunnon vai varaisimmeko hotellihuoneen?",
          "Katselimme myös junalippuja valmiiksi. Valitsimme sellaiset vuorot, joiden jälkeen kulkisi vielä myöhempiä junia varalla, sillä espanjalaisiin juna-aikatauluihin ei aina voi täysin luottaa — kuten matkapäiväkirjan toisena päivänä jo huomasimme! Koska Emilia oli edelleen kiinni omassa koulutusvuorossaan, otin loppupäivän rennosti kirjaa lukien ja akkuja ladaten omaa vuoroani odotellessa."
        ],
        tr: [
          "Perşembe sakin geçti. Emilia sıradaki simülasyon görevi (#8) üzerinde çalışmaya devam ederken Noora, GPU'nun kararlı kaldığından ve eğitim sürecinin gerektiği gibi ilerlediğinden emin olmak için arka planda yakından takip etti.",
          "Bilgisayarlar işlerini yaparken ve Emilia'nın eğitiminin bitmesini beklerken, kızlarla birlikte Barselona'ya yapacağımız yaklaşan geziyi planlamak için bolca vaktimiz oldu. Dört günlüğüne oraya gidip doğrudan merkez ofiste çalışmayı ve aynı zamanda yeni yerler keşfetmeyi düşünüyoruz. Ne zaman gitmenin en iyisi olacağını ve nerede kalmanın daha mantıklı olacağını konuştuk: ortak bir Airbnb evi mi kiralasak, yoksa otel odası mı ayırtsak?",
          "Tren biletlerine de önceden göz attık. Yedek olarak daha geç saatlerde başka trenler de bulunacak seferleri seçtik; çünkü İspanya'daki tren saatlerine her zaman tamamen güvenilemiyor. Bunu gezi günlüğümün ikinci gününde zaten görmüştük! Emilia hâlâ kendi eğitim sırasındayken, ben de sıramı bekleyerek günün geri kalanında kitabımı okudum ve dinlendim."
        ]
      },
      tags: ["internship", "robotics", "travel", "daily life"],
      imageAlt: { en: "Illustrated placeholder for simulation training and planning a trip to Barcelona", fi: "Kuvituksellinen paikkamerkki simulaatiokoulutuksesta ja Barcelonan-matkan suunnittelusta", tr: "Simülasyon eğitimi ve Barselona gezisi planlaması için temsili çizim" }
    },
    {
      slug: "project-work-and-an-evening-walk", date: "2026-11-04", category: "Internship", location: "Móra d’Ebre", image: "4_marras.jpg",
      title: { en: "Project Work and an Evening Walk", fi: "Varsinaisten projektien kimppuun ja iltakävelyn ystävät", tr: "Asıl projelere başlamak ve akşam yürüyüşünde yeni dostlar" },
      summary: {
        en: "We finally got started on our internship projects, including a shared robotics simulation and my own data-reliability task. After a focused workday, an evening walk brought two small animal encounters.",
        fi: "Pääsimme vihdoin aloittamaan harjoitteluprojektit: yhteisen robottisimulaation ja oman datan luotettavuuteen liittyvän tehtäväni. Keskittyneen työpäivän jälkeen iltakävelyllä vastaan tuli kaksi pientä eläinkaveria.",
        tr: "Sonunda staj projelerimize başladık: ortak bir robot simülasyonu ve bana ait veri güvenilirliği görevi. Odaklı bir iş gününün ardından akşam yürüyüşünde iki küçük hayvan dostla karşılaştım."
      },
      paragraphs: {
        en: [
          "Once we had finally set up the connections to the workplace computer, we could properly get started on our actual internship tasks. Each of us has two clear goals for the next two weeks.",
          "Our first shared task is to reproduce a robot-arm experiment that has already been shown to work in a simulation environment: the ACT cube task. Each of us will set up the required tools, LeRobot and PyTorch, prepare training data, train an AI model and test it in the simulation. The idea is to make sure we know how to use the tools before moving on to the real robot. We only have one powerful graphics card, and training a model takes several hours, so we cannot run multiple training sessions at once. The girls and I discussed how to divide the work: Emilia will start the first training run, while Noora coordinates the schedule.",
          "I also have my own area of responsibility: making sure the data pipeline is reliable, under the task name “Never lose data again.” Previously, the team lost several sets of training data when the robot computer ran out of storage during a run. Now the robot automatically sends recordings to a separate data computer and only deletes its local copies after receiving confirmation that they have been saved. My job is to test the whole process in a safe test environment on my own computer, deliberately check how it handles problems such as a lost connection or a full disk, and verify that no files disappear.",
          "During the day, I also practised more Python, since that is the language I will use to write this project’s code. Otherwise, the workday was calm and focused.",
          "In the evening, I went for some fresh air and a short walk around the neighbourhood. Along the way, I made two little animal friends! First I met a sweet little cat who let me pet her peacefully. Further along, I spotted a small mouse on the ground. At first I thought it had died, because it froze in place and stared straight ahead. When I went a little closer, though, it suddenly scurried away. After a lovely evening walk, it was time to go to bed."
        ],
        fi: [
          "Kun yhteydet työpaikan koneelle oli vihdoin saatu kuntoon, pääsimme kunnolla kiinni varsinaisiin harjoittelutehtäviimme. Seuraavien kahden viikon ajan jokaisella meistä on kaksi selkeää tavoitetta.",
          "Ensimmäisenä yhteisenä tehtävänämme on toistaa simulaatioympäristössä toimivaksi todettu robottikäsikoe eli ACT-kuutiotehtävä. Käytännössä jokainen meistä asentaa tarvittavat työkalut, LeRobotin ja PyTorchin, rakentaa opetusdatan, kouluttaa oman tekoälymallin ja testaa sen toimivuuden simulaatiossa. Tarkoituksena on varmistaa, että osaamme käyttää työkaluja ennen kuin siirrymme oikean robotin pariin. Käytössämme on vain yksi tehokas näytönohjain, ja yhden mallin kouluttaminen kestää useita tunteja, joten emme voi ajaa koulutuksia samaan aikaan. Juttelimme tyttöjen kanssa työnjaosta ja päätimme, että Emilia aloittaa koulutuksen ensimmäisenä, kun taas Noora koordinoi vuorolistan.",
          "Tämän lisäksi minulla on oma vastuualueeni datan käsittelyketjun luotettavuuden varmistamisessa. Tehtävän nimi on ”Never lose data again”. Aikaisemmin tiimi menetti useita opetusdatoja, kun robotin tietokoneen muisti täyttyi kesken ajon. Nykyään robotti lähettää tallenteet automaattisesti erilliselle datakoneelle ja poistaa omat kopionsa vasta saatuaan vahvistuksen tallennuksesta. Minun tehtäväni on testata koko ketjua turvallisessa testiympäristössä omalla koneellani, kokeilla tarkoituksella, miten järjestelmä kestää ongelmatilanteita, kuten yhteyden katkeamista tai täyttä levytilaa, ja varmistaa, ettei yksikään tiedosto katoa.",
          "Päivän aikana harjoittelin myös lisää Python-ohjelmointia, sillä tulen kirjoittamaan tämän projektin koodit Pythonilla. Muuten työpäivä sujui rauhallisissa ja keskittyneissä merkeissä.",
          "Illalla lähdin vielä pienelle happihyppelylle ja iltakävelylle lähialueelle. Matkan varrella sain kaksi pientä eläinkaveria! Ensin vastaan tuli suloinen pikkukissa, joka antoi minun rapsuttaa itseään ihan rauhassa. Jatkaessani matkaa huomasin maassa pienen hiiren. Luulin aluksi, että se oli menehtynyt, sillä se vain jähmettyi paikoilleen ja tuijotti suoraan eteenpäin. Kun menin hieman lähemmäs, se lähtikin vipeltämään vauhdilla karkuun. Mukavan iltakävelyn jälkeen oli aika käydä nukkumaan."
        ],
        tr: [
          "İş yerindeki bilgisayara bağlantıları sonunda ayarlayınca asıl staj görevlerimize başlayabildik. Önümüzdeki iki hafta boyunca her birimizin iki net hedefi var.",
          "İlk ortak görevimiz, simülasyon ortamında çalıştığı önceden doğrulanmış bir robot kolu deneyini, yani ACT küp görevini tekrarlamak. Her birimiz gerekli araçları (LeRobot ve PyTorch) kuracak, eğitim verilerini hazırlayacak, kendi yapay zekâ modelimizi eğitecek ve simülasyonda test edeceğiz. Amacımız gerçek robota geçmeden önce araçları kullanmayı iyice öğrenmek. Elimizde yalnızca güçlü bir ekran kartı var ve bir modelin eğitimi saatler sürdüğü için aynı anda birden fazla eğitim çalıştıramıyoruz. Kızlarla iş bölümünü konuştuk: ilk eğitime Emilia başlayacak, Noora ise sırayı koordine edecek.",
          "Bunun yanında, veri işleme hattının güvenilirliğini sağlamak da benim sorumluluğumda. Görevin adı “Never lose data again”. Daha önce robot bilgisayarının depolama alanı çalışma sırasında dolunca ekip birkaç eğitim verisi setini kaybetmiş. Artık robot kayıtları otomatik olarak ayrı bir veri bilgisayarına gönderiyor ve kendi kopyalarını ancak kaydedildiklerine dair onay aldıktan sonra siliyor. Benim görevim tüm süreci kendi bilgisayarımda güvenli bir test ortamında sınamak, bağlantının kesilmesi ya da diskin dolması gibi sorunlara sistemin nasıl tepki verdiğini bilerek denemek ve hiçbir dosyanın kaybolmadığını doğrulamak.",
          "Gün içinde Python programlama konusunda da biraz daha pratik yaptım; çünkü bu projenin kodlarını Python ile yazacağım. Onun dışında iş günü sakin ve odaklı geçti.",
          "Akşam biraz temiz hava almak ve mahallede yürüyüş yapmak için dışarı çıktım. Yol boyunca iki küçük hayvan dost edindim! Önce usulca kendisini sevmeme izin veren sevimli bir kediyle karşılaştım. Yürümeye devam ederken yerde küçük bir fare gördüm. Kıpırdamadan durup karşıya baktığı için önce öldüğünü sandım. Biraz yaklaşınca hızla kaçmaya başladı. Güzel bir akşam yürüyüşünün ardından yatma vakti gelmişti."
        ]
      },
      tags: ["internship", "robotics", "programming", "daily life"],
      imageAlt: { en: "Illustrated placeholder for a day of robotics project work and an evening walk", fi: "Kuvituksellinen paikkamerkki robotiikkaprojektin työpäivästä ja iltakävelystä", tr: "Robotik proje çalışması ve akşam yürüyüşü için temsili çizim" }
    },
    {
      slug: "weekly-cleaning-cafe-and-ssh-keys", date: "2026-11-03", category: "Experiences", location: "Móra d’Ebre", image: "3_marras.jpg",
      title: { en: "Weekly Cleaning, a Café Break and SSH Keys", fi: "Viikkosiivous, kahvilahetki ja SSH-avainten säätöä", tr: "Haftalık temizlik, kafe molası ve SSH anahtarları" },
      summary: {
        en: "We tidied the apartment before its weekly cleaning, enjoyed a café break, and set up public SSH keys for remote work.",
        fi: "Järjestelimme asuntoa viikkosiivousta varten, nautimme kahvilahetkestä ja laitoimme etätyöskentelyn SSH-avaimia kuntoon.",
        tr: "Haftalık temizlik öncesinde daireyi toparladık, kafede mola verdik ve uzaktan çalışma için SSH anahtarlarını ayarladık."
      },
      paragraphs: {
        en: [
          "The girls and I woke up at around nine and carried on a little with the cleaning from the day before. We put the larger things away and tidied the apartment so everything would be ready for the owner to come and do the weekly cleaning.",
          "Once we had finished getting things in order, we decided to get out of the way while the cleaning was being done. First we headed to a local café for an unhurried moment, then stopped by the shop. We came back to the apartment about three hours later and were in for a really pleasant surprise: it had not just had its sheets changed and a quick vacuum — the floors had been washed too, and everything was sparkling clean!",
          "It was nice to take a short meal break in the clean apartment, after which we rolled up our sleeves and did some work. We took care of some important basics for remote work, such as creating public SSH keys and sharing them with Emilio, so we can work from our own computers and connect smoothly to the main computer at the workplace."
        ],
        fi: [
          "Heräsimme tyttöjen kanssa noin kello yhdeksän ja jatkoimme hieman edellisen päivän siivousta. Raivasimme isoimmat tavarat paikoilleen ja järjestimme asuntoa, jotta kaikki olisi valmiina ennen kuin asunnon omistaja saapuisi tekemään viikoittaisen siivouksen.",
          "Kun saimme omat järjestelymme tehtyä, päätimme lähteä pois siivoojan tieltä. Suuntasimme ensin paikalliseen kahvilaan nauttimaan kiireettömästä hetkestä ja poikkesimme sen jälkeen vielä kauppaan. Palasimme kämpille noin kolmen tunnin päästä, ja vastassa oli todella positiivinen yllätys: lakanoiden vaihdon ja pikaisen imuroinnin lisäksi lattiatkin oli pesty, ja kaikki paikat kiilsivät puhtauttaan!",
          "Puhtaassa asunnossa oli mukava pitää pieni ruokatauko, minkä jälkeen käärimme hihat ja teimme hieman töitä. Hoidimme kuntoon tärkeitä etätyöskentelyn perusasioita. Loimme esimerkiksi julkiset SSH-avaimet ja jaoimme ne Emiliolle, jotta voimme jatkossa työskennellä omilta koneiltamme ja ottaa sujuvasti yhteyden työpaikan pääkoneelle."
        ],
        tr: [
          "Kızlarla birlikte sabah saat dokuz civarında uyandık ve bir önceki gün başladığımız temizliğe biraz daha devam ettik. Büyük eşyaları yerlerine kaldırdık ve ev sahibimiz haftalık temizliği yapmaya gelmeden önce daireyi düzenledik.",
          "Kendi düzenlemelerimizi bitirince temizlik sırasında evde olmayıp ortadan çekilmeye karar verdik. Önce sakin bir anın tadını çıkarmak için yerel bir kafeye gittik, ardından markete uğradık. Yaklaşık üç saat sonra daireye döndüğümüzde bizi çok güzel bir sürpriz bekliyordu: yalnızca çarşaflar değiştirilip hızlıca süpürülmemiş, yerler de silinmişti; her yer ışıl ışıl olmuştu!",
          "Temiz dairede kısa bir yemek molası vermek güzeldi. Ardından kolları sıvayıp biraz çalıştık. Uzaktan çalışma için önemli temel işleri hallettik. Örneğin herkese açık SSH anahtarları oluşturup Emilio'yla paylaştık; böylece bundan sonra kendi bilgisayarlarımızdan çalışabilecek ve iş yerindeki ana bilgisayara sorunsuzca bağlanabileceğiz."
        ]
      },
      tags: ["daily life", "remote work", "programming"],
      imageAlt: { en: "Illustrated placeholder for weekly cleaning, a café break and remote-work setup", fi: "Kuvituksellinen paikkamerkki viikkosiivouksesta, kahvilahetkestä ja etätyön valmistelusta", tr: "Haftalık temizlik, kafe molası ve uzaktan çalışma hazırlığı için temsili çizim" }
    },
    {
      slug: "getting-the-week-started-and-solving-the-internet-issue", date: "2026-11-02", category: "Experiences", location: "Móra d’Ebre", image: "2_marras.jpg",
      title: { en: "Getting the Week Started and Solving the Internet Problem", fi: "Viikko käyntiin ja nettiongelma ratkaistua", tr: "Haftaya başlamak ve internet sorununu çözmek" },
      summary: {
        en: "A grocery run and a tidy-up gave way to an internet outage, but help from our landlord got the connection back and let me dive into learning new tools for the project.",
        fi: "Kauppareissun ja siivouksen jälkeen nettiyhteys katkesi, mutta asunnon omistajan avulla yhteys saatiin toimimaan ja pääsin perehtymään projektin uusiin työkaluihin.",
        tr: "Market alışverişi ve temizlikten sonra internet kesildi; ev sahibimizin yardımıyla bağlantı düzeldi ve projenin yeni araçlarını öğrenmeye koyuldum."
      },
      paragraphs: {
        en: [
          "The new week got off to an energetic start. Noora and I went to the grocery store first thing in the morning to stock up the cupboards for the days ahead. When we got home, we tidied the apartment so we could work more comfortably in a clean space, then sat down at our computers, ready to continue the project.",
          "Unfortunately, we ran into an unpleasant surprise straight away: something had gone wrong with the apartment’s internet, and the connection was completely down. Since almost all our tools and research depended on being online, our work came to a standstill.",
          "We did not let ourselves get stuck, though, and contacted the owner of the apartment. With his help and a bit of troubleshooting, we finally got the connection working again by the evening. Once the internet was back, I could really get going. I spent time researching the best and most efficient way to approach the work. I had quite a learning journey ahead of me, since I needed to get to grips with both completely new tools and a new programming language for the project. Learning so much took concentration, but it was rewarding to finally start building and understand the bigger picture better.",
          "After an intense stretch of research and studying, it was nice to take a little break and catch my breath. I called home in Finland and had a relaxed catch-up with my family. I spent the rest of the day and evening unwinding and playing games with friends — a great way to clear my head after all the troubleshooting and learning."
        ],
        fi: [
          "Uusi viikko lähti reippaasti käyntiin, kun kävimme heti aamusta Nooran kanssa ruokakaupassa täydentämässä asunnon kaappeja tulevien päivien varalle. Kotiin päästyämme siivosimme kämpän, jotta työskentely sujuisi mukavammin siistissä ympäristössä, ja istuimme koneiden ääreen valmiina jatkamaan projektia.",
          "Valitettavasti kohtasimme heti ikävän yllätyksen: asunnossa oli ilmennyt jokin nettiongelma, eikä yhteys toiminut lainkaan. Koska melkein kaikki työkalut ja tiedonhaku vaativat nettiyhteyttä, töiden edistäminen jäi siltä erää täysin jumiin.",
          "Emme kuitenkaan jääneet neuvottomiksi, vaan otimme yhteyttä asunnon omistajaan. Hänen avullaan ja pienellä säätämisellä saimme yhteyden vihdoin toimimaan iltaan mennessä. Kun netti alkoi taas pelittää, pääsin kunnolla vauhtiin. Syvennyin tutkimaan, miten työt kannattaisi toteuttaa parhaalla ja tehokkaimmalla mahdollisella tavalla. Edessä oli melkoinen oppimismatka, sillä minun piti ottaa projektia varten haltuun sekä täysin uusia työkaluja että uusi ohjelmointikieli. Vaikka uuden opettelu vaati paljon keskittymistä, oli palkitsevaa päästä vihdoin rakentamaan ja ymmärtämään kokonaisuutta paremmin.",
          "Tehokkaan tutkimisen ja opiskelun jälkeen oli mukava pitää pieni tauko ja hengähtää. Soittelin kotiin Suomeen ja vaihdoin rauhassa kuulumisia perheen kanssa. Loppupäivä ja ilta kuluivat rennoissa merkeissä kavereiden kanssa pelatessa, mikä oli loistava tapa nollata ajatukset kaiken säätämisen ja uuden opettelun jälkeen."
        ],
        tr: [
          "Yeni hafta enerjik bir şekilde başladı. Noora'yla sabah erkenden markete gidip önümüzdeki günler için evin mutfak dolaplarını doldurduk. Eve dönünce temiz bir ortamda daha rahat çalışabilmek için daireyi toparladık, ardından projeye devam etmeye hazır bir şekilde bilgisayarlarımızın başına oturduk.",
          "Ne yazık ki hemen can sıkıcı bir sürprizle karşılaştık: dairede bir internet sorunu çıkmıştı ve bağlantı hiç çalışmıyordu. Araçlarımızın ve araştırmalarımızın neredeyse tamamı internet gerektirdiği için işlerimiz tamamen durdu.",
          "Yine de çaresiz kalmadık ve dairenin sahibiyle iletişime geçtik. Onun yardımı ve biraz uğraşmamız sayesinde bağlantıyı akşama doğru yeniden çalıştırmayı başardık. İnternet gelince nihayet işe koyulabildim. Çalışmaları en iyi ve en verimli şekilde nasıl yapabileceğimi araştırmaya daldım. Proje için hem tamamen yeni araçları hem de yeni bir programlama dilini öğrenmem gerektiğinden önümde epey uzun bir öğrenme süreci vardı. Bu kadar yeni şey öğrenmek yoğunlaşmayı gerektirse de sonunda üretmeye başlayabilmek ve genel yapıyı daha iyi anlamak çok tatmin ediciydi.",
          "Yoğun araştırma ve çalışmanın ardından kısa bir mola verip soluklanmak iyi geldi. Finlandiya'daki ailemi arayıp onlarla sakince sohbet ettim. Günün geri kalanı ve akşam, arkadaşlarımla oyun oynayıp rahatlayarak geçti. Tüm o uğraşın ve yeni şeyler öğrenmenin ardından kafamı dağıtmak için harika bir yoldu."
        ]
      },
      tags: ["daily life", "programming", "learning"], imageAlt: { en: "Illustrated placeholder for a productive Monday and an internet problem", fi: "Kuvituksellinen paikkamerkki tehokkaasta maanantaista ja nettiongelmasta", tr: "Verimli bir pazartesi ve internet sorunu için temsili çizim" }
    },
    {
      slug: "finishing-the-week-and-evening-with-poli-and-friends", date: "2026-10-30", category: "Experiences", location: "Móra d’Ebre" , image: "6_paiva_kuva.jpg",
      title: { en: "Finishing the week’s work and an evening with Poli and friends", fi: "Työn viimeistelyä ja illanviettoa Polin ja muiden kanssa", tr: "Haftanın işlerini tamamlamak ve Poli ve arkadaşlarıyla akşam" },
      summary: {
        en: "We finished the week's work with the girls, spent a relaxed evening with Poli and other students, and then kept working a little at home.",
        fi: "Viimeistelimme viikon työt tyttöjen kanssa, vietimme rentouttavan illan Polin ja muiden opiskelijoiden kanssa ja jatkoimme vähän työskentelyä sitten vielä kotona.",
        tr: "Kızlarla haftalık işleri bitirdik, Poli ve diğer öğrencilerle sakin bir akşam geçirdik ve ardından evde biraz daha çalışmaya devam ettik."
      },
      paragraphs: {
        en: [
          "On Friday we got to roll up our sleeves and finish the week’s tasks together with the girls. I was involved in helping and guiding Emilia and Noora as needed so that we could get everything done smoothly and make sure the project sections were ready before the weekend.",
          "Once we had finished the day’s work, we took a well-earned break and relaxed at the apartment for a while.",
          "In the evening, we went to meet local students and friends, including Poli and other exchange students who had earlier studied in Finland. It was really nice to catch up and spend time with them in a familiar group.",
          "I decided to head home a little earlier than the other girls. I still had the energy and motivation to keep going, so I continued working at home on this website and the project for a long time that evening."
        ],
        fi: [
          "Perjantaina pääsimme käärimään hihat ja viimeistelemään viikon työt tyttöjen kanssa. Olin itse mukana auttamassa ja ohjaamassa Emiliaa ja Nooraa tarpeen mukaan, jotta saimme kaikki tehtävät ja projektin osiot rullaamaan sujuvasti ja valmiiksi ennen viikonloppua.",
          "Kun saimme päivän työt tehtyä, otimme hetken aikaa ansaitulle levolle ja rentoutumiselle kämpillä.",
          "Illalla lähdimme tapaamaan paikallisia opiskelijoita ja tuttuja, muun muassa Polia ja muita vaihtareita, jotka olivat aikaisemmin olleet Suomessa opiskelijavaihdossa. Oli todella mukava päästä vaihtamaan kuulumisia ja viettämään iltaa heidän kanssaan tutussa seurassa!",
          "Päätin kuitenkin lähteä kotiin vähän aikaisemmin kuin muut tytöt. Minulla oli vielä virtaa ja motivaatiota jäljellä, joten jatkoin kotona täysin rinnoin työskentelyä tämän kyseisen verkkosivuston ja projektin parissa pitkälle iltaan."
        ],
        tr: [
          "Cuma günü sonunda kolları sıvadık ve hafta boyunca yaptığımız işleri kızlarla birlikte tamamlamaya başladık. Ben de Emilia ve Noora’ya gerektiğinde yardım ederek ve rehberlik ederek işleri düzgün bir şekilde bitirmemize katkıda bulundum; böylece hafta sonu gelmeden tüm görevler ve proje bölümleri hazır hale geldi.",
          "Günlük işlerin bitmesinin ardından evde kısa bir dinlenme molası verdik ve biraz rahatladık.",
          "Akşam ise Poli ve Finlandiya’da daha önce öğrenci değişim programında bulunmuş diğer öğrenciler de dahil olmak üzere yerel öğrencilerle ve tanıdıklarla buluşmaya çıktık. Onlarla sohbet etmek ve birlikte vakit geçirmek gerçekten keyifliydi.",
          "Fakat diğer kızlardan biraz daha erken eve dönmeye karar verdim. Hâlâ enerjim ve motivasyonum vardı, bu yüzden evde bu web sitesi ve proje üzerinde uzun süre çalışmaya devam ettim."
        ]
      },
      tags: ["daily life", "work in progress"], imageAlt: { en: "Illustrated placeholder for finishing the week’s tasks and a relaxed evening with friends", fi: "Kuvituksellinen paikkamerkki viikon työtehtävien viimeistelemisestä ja rentouttavasta iltasta ystävien kanssa", tr: "Hafta işlerini tamamlamak ve arkadaşlarla sakin bir akşam için temsili çizim" }
    },
    {
      slug: "second-rest-day-and-shared-cooking", date: "2026-11-01", category: "Experiences", location: "Móra d’Ebre", image: "8_paiva_kuva.jpg",
      title: { en: "A second rest day and a shared cooking moment", fi: "Toinen lepopäivä ja yhteinen kokkaushetki", tr: "İkinci dinlenme günü ve ortak yemek hazırlama anı" },
      summary: {
        en: "We took another calm rest day, went grocery shopping together and enjoyed a homemade meal cooked by Emilia before the new work week began.",
        fi: "Otimme toisen rauhallisen lepopäivän, kävimme yhdessä kaupassa ja nauttiimme Emilian valmistamasta herkullisesta aterioista ennen uuden työviikon alkua.",
        tr: "Bir başka sakin dinlenme günü geçirdik, birlikte markete gittik ve yeni iş haftası başlamadan önce Emilia’nın hazırladığı ev yemeklerinin keyfini çıkardık."
      },
      paragraphs: {
        en: [
          "Sunday became our second consecutive rest day. The slow pace of the weekend did us a lot of good, because the rush of the first week was still lingering in both our bodies and minds. We did not put any pressure on ourselves or set any big plans; instead, we kept relaxing and recharging for the week ahead.",
          "The girls and I went on a grocery trip together to get ingredients and have a look around the area. Once we were back home, Emilia took over the kitchen and cooked us all an amazing meal. It was lovely to sit together at the table and enjoy a good meal and good company.",
          "Otherwise, the day was mostly similar to Saturday: relaxed, with some time spent on our own devices, reading and resting. The calm weekend was exactly what we needed before the start of a new work week."
        ],
        fi: [
          "Sunnuntaista muodostui meidän toinen peräkkäinen lepopäivämme. Viikonlopun rauhallinen tahti teki todella hyvää, sillä ensimmäisen viikon pyöritys tuntui vieläkin keholla ja mielessä. Emme ottaneet mitään paineita tai suuria aikatauluja, vaan jatkoimme rentoutumista ja akkujen lataamista tulevaa viikkoa varten.",
          "Kävimme tyttöjen kanssa yhdessä kauppakierroksella hakemassa aineksia ja katselemassa ympärillemme. Kotiin päästyämme Emilia otti keittiön haltuun ja kokkasi meille kaikille mahtavan aterian. Oli ihana istua yhdessä pöydän ääreen nauttimaan hyvästä ruuasta ja mukavasta seurasta!",
          "Muuten päivän kulku oli pitkälti samanlainen kuin lauantainakin: otimme rennosti, katselimme omia juttujamme koneilta, luimme ja lepäsimme. Rauhallinen viikonloppu oli juuri sitä, mitä tarvitsimme ennen uuden työviikon alkua."
        ],
        tr: [
          "Pazar günü ikinci ardışık dinlenme günümüz oldu. Haftasonunun yavaş temposu gerçekten iyi geldi; çünkü ilk haftanın koşturması hâlâ hem bedenimizde hem de zihnimizde hissediliyordu. Hiçbir baskı hissetmeden ve büyük planlar yapmadan dinlenmeye ve yeni haftaya hazırlanma moduna devam ettik.",
          "Kızlarla birlikte market turu yapıp malzemeler aldık ve çevremize bakındık. Eve döndüğümüzde Emilia mutfağa geçti ve hepimize harika bir yemek hazırladı. Birlikte masaya oturup güzel bir yemek yemek ve keyifli bir ortamda vakit geçirmek gerçekten çok güzeldi!",
          "Günün geri kalanı çoğunlukla cumartesiye benziyordu: sakin, kendi cihazlarımızla vakit geçirip, okuyup ve dinlenerek. Bu sakin hafta sonu, yeni çalışma haftası başlamadan önce tam olarak ihtiyacımız olan şeydi."
        ]
      },
      tags: ["daily life", "rest"], imageAlt: { en: "Illustrated placeholder for another rest day and a shared cooking moment", fi: "Kuvituksellinen paikkamerkki toisesta lepopäivästä ja yhteisestä kokkaushetkestä", tr: "İkinci bir dinlenme günü ve ortak yemek hazırlama anı için temsili çizim" }
    },
    {
      slug: "rest-day-and-homey-moments", date: "2026-10-31", category: "Experiences", location: "Móra d’Ebre", image: "7_paiva_kuva.jpg",
      title: { en: "A deserved rest day and cosy moments at home", fi: "Ansaittu lepopäivä ja kotoisia hetkiä", tr: "Hakkıyla dinlenilen bir gün ve evdeki sıcak anlar" },
      summary: {
        en: "After an intense first week in a new country, we took a full rest day, spent time outdoors, and recharged at home while catching up with family and friends.",
        fi: "Ensimmäisen intensiivisen viikon jälkeen uuden maan ja uuden ympäristön keskellä päätimme pitää täyden lepopäivän, kävellä rauhallisesti ulkona ja ladata akkuja kotosalla perheen ja ystävien kanssa puhelimessa jutellen.",
        tr: "Yeni bir ülkede ve tamamen farklı bir ortamda geçen yoğun ilk haftanın ardından tam bir dinlenme günü ayırdık; dışarıda sakin bir yürüyüş yaptık, evde dinlendik ve ailemizle ve arkadaşlarımızla konuşarak enerji topladık."
      },
      paragraphs: {
        en: [
          "The first full week in a new country and in a completely new kind of environment had been really intense for all of us. All the new people, the unfamiliar language, constant navigation, moving into a new home and starting work had taken their toll. The week had been so exhausting mentally, physically and in general that we decided to dedicate Saturday to a full rest day.",
          "We did not rush anything. During the day, we only went on a calm, relaxed walk to breathe fresh air and look around the neighbourhood. Otherwise, the day was mostly spent at home resting and recharging: we lay comfortably, read books and played on the computers.",
          "During the day, it was also lovely to pause and catch up with family back home. I spent a long time on the phone talking with my family and friends in Finland and Turkey. It was really calming and comforting to hear familiar voices, tell them about the adventure of the first week and hear what was happening back home. After such a peaceful day, I felt much more refreshed and ready for the weeks ahead."
        ],
        fi: [
          "Ensimmäinen kokonainen viikko uudessa maassa ja täysin uudenlaisessa ympäristössä oli ollut meille kaikille todella intensiivinen. Kaikki uudet ihmiset, vieras kieli, jatkuva suunnistaminen, muutto uuteen kotiin ja työn aloittaminen olivat ottaneet veronsa. Viikko oli ollut henkisesti, fyysisesti ja yleisesti niin uuvuttava, että päätimme suosiolla pyhittää lauantain täydelliselle lepopäivälle.",
          "Emme ottaneet mitään kiirettä mistään. Kävimme päivän aikana vain rauhallisella ja rennolla kävelyllä hengittämässä raitista ilmaa ja katselemassa lähiympäristöä. Muuten päivä kului pitkälti kotosalla vain leväten ja akkuja ladaten: makasimme mukavasti, luimme kirjoja ja pelasimme tietokoneilla.",
          "Päivän aikana oli myös ihana pysähtyä vaihtamaan kuulumisia kotiväen kanssa. Vietin pitkän ajan puhelimessa jutellen perheelle ja ystäville takaisin Suomeen ja Turkkiin. Oli todella rauhoittavaa ja tärkeää kuulla tuttuja ääniä, kertoa ensimmäisen viikon seikkailuista ja kuulla, mitä kotoa ja heillä kuului. Rauhallisen päivän jälkeen olo tuntui taas huomattavasti virkeämmältä ja valmiimmalta kohti tulevia viikkoa!"
        ],
        tr: [
          "Yeni bir ülkede ve tamamen farklı bir ortamda geçen ilk tam hafta hepimiz için gerçekten yoğundu. Tüm yeni insanlar, yabancı dil, sürekli yön bulma, yeni eve taşınma ve işe başlama hepsi üzerimizde etkisini göstermişti. Hafta hem zihinsel hem fiziksel olarak o kadar yıpratıcıydı ki, cumartesiyi tamamen dinlenme gününe ayırmaya karar verdik.",
          "Hiçbir şeyi aceleye getirmedik. Gün içinde sadece sakin bir yürüyüş yaparak temiz hava aldık ve çevreyi izledik. Geri kalan zamanın büyük çoğunluğunu evde dinlenerek ve şarj olarak geçirdik: rahatça uzandık, kitap okuduk ve bilgisayarlarda vakit geçirdik.",
          "Gün içinde ayrıca evdekilere haberleşmek için durup kısa bir sohbet yapmanın da keyfi vardı. Finlandiya’daki ve Türkiye’deki ailem ve arkadaşlarımla uzun süre telefonda konuştum. Tanıdık sesleri duymak, ilk haftanın maceralarını anlatmak ve evde neler olduğunu öğrenmek gerçekten rahatlatıcı ve çok değerliydi. Böyle sakin bir günün ardından kendimi çok daha dinlenmiş ve önümüzdeki haftalara hazır hissettim."
        ]
      },
      tags: ["daily life", "reflection"], imageAlt: { en: "Illustrated placeholder for a well-earned rest day and peaceful home moments", fi: "Kuvituksellinen paikkamerkki ansaitusta lepopäivästä ja rauhallisista kodinhetkistä", tr: "Hak edilmiş bir dinlenme günü ve evdeki huzurlu anlar için temsili çizim" }
    },
    {
      slug: "meeting-with-landlord-and-starting-remote-work", date: "2026-10-29", category: "Experiences", location: "Móra d’Ebre", image: "5_paiva_kuva.jpg",
      title: { en: "Meeting the landlord and starting the internship work", fi: "Tapaaminen asunnonomistajan kanssa ja työharjoittelun alku", tr: "Ev sahibiyle görüşme ve staj çalışmasının başlangıcı" },
      summary: {
        en: "We met the landlord, presented our PowerPoint to Mireia and the students, and then began remote work while planning the coming days in the internship.",
        fi: "Tapasimme asunnonomistajan, esitimme PowerPointin Mireialle ja opiskelijoille sekä aloitimme etätyön tekemisen ja tulevien päivien suunnittelun harjoittelun aikana.",
        tr: "Ev sahibiyle görüştük, Mireia ve öğrencilerle PowerPoint sunumumuzu yaptık ve ardından uzaktan çalışmaya başladık; staj için yaklaşan günleri de planladık."
      },
      paragraphs: {
        en: [
          "On 29 October at 11:30 a.m., we had a meeting with the Airbnb apartment owner. We clarified the basic rules and other important details, such as how to handle the rubbish, which had to be taken out between 6 and 10 a.m., and the weekly cleaning rules. The owner warned us that if the police saw any violations, we could be fined.",
          "After the meeting, we met Mireia and the other students again. This time we presented the PowerPoint presentation we had prepared the day before. After that, we returned to the apartment and rested for a while.",
          "Later, we began working remotely. The trip between our city and Barcelona takes a total of six hours, so we often work from home, while also having a few Teams meetings with Emilio each week to discuss progress. We also visit Barcelona a few times a week to get familiar with our tasks and the work environment. After installing the necessary materials for the project, I started working on this page, where I could share my exchange experience. By the time it was late, the page was in a good state and we went to sleep with the girls."
        ],
        fi: [
          "29. lokakuuta kello 11.30 meillä oli tapaaminen asunnon omistajan kanssa Airbnb-asunnossa. Selvitimme perusasiat ja muut tärkeät säännöt, kuten roskien viemisen: ne piti viedä klo 6–10, ja viikonpuhdistuksesta oli myös tärkeää pitää huolta. Omistaja varoitti, että jos poliisi näkee rikkomuksen, siitä voi seurata sakko.",
          "Tapaamisen jälkeen näimme Mireian ja muut opiskelijat jälleen. Tällä kertaa esitimme eilisen PowerPoint-esityksen. Sen jälkeen palasimme asuntoon ja lepäsimme hetkeksi.",
          "Myöhemmin aloitimme etätyön tekemisen. Matka meidän kaupungista Barcelonaan kestää yhteensä kuusi tuntia, joten teemme usein työtä etänä. Viikossa on muutama Teams-palaveri Emilion kanssa, jotta työn eteneminen pysyy tasaisena. Muutaman kerran viikossa käymme myös Barcelonassa tutustumassa tehtäviin ja työympäristöön. Asensin tarvittavat materiaalit projektia varten ja aloin työskentelemään tämän sivun parissa, jossa voisin jakaa kokemukseni vaihdosta. Sivu oli jo hyvällä mallilla, kun kello oli myöhään, joten menimme nukkumaan tyttöjen kanssa."
        ],
        tr: [
          "29 Ekim’de saat 11:30’da Airbnb evin sahibiyla evde bir görüşme yaptık. Temel konuları ve dikkat edilmesi gereken kuralları netleştirdik; örneğin çöplerin saat 06:00–10:00 arasında götürülmesi gerekiyordu ve haftalık temizlik kurallarına dikkat etmek önemliydi. Ev sahibi, polis tarafından herhangi bir kural ihlali görülürse ceza gelebileceğini söyledi.",
          "Görüşmenin ardından Mireia ve diğer öğrencilerle tekrar bir araya geldik. Bu kez bir gün önce hazırladığımız PowerPoint sunumunu yaptık. Sonrasında eve döndük ve kısa süre dinlendik.",
          "Daha sonra uzaktan çalışmaya başladık. Şehrimizden Barselona’ya gidiş-dönüş toplamda altı saat sürüyor, bu yüzden çoğu zaman uzaktan çalışıyoruz. Her hafta Emilio ile birkaç Teams toplantısı yapıyoruz ki ilerleme takibi yapılsın. Ayrıca haftada birkaç kez Barselona’ya gidip görevleri ve çalışma ortamını tanımaya devam ediyoruz. Proje için gerekli materyalleri kurduktan sonra bu sayfada çalışmaya başladım; burada değişim deneyimimi paylaşabilecektim. Saat geç olana kadar sayfa iyi bir durumda ilerledi ve kızlarla birlikte uykuya gittik."
        ]
      },
      tags: ["daily life", "work in progress"], imageAlt: { en: "Illustrated placeholder for the meeting with the landlord and the start of remote work", fi: "Kuvituksellinen paikkamerkki tapaamisesta asunnonomistajan kanssa ja etätyön alkamisesta", tr: "Ev sahibiyle görüşme ve uzaktan çalışmanın başlangıcı için temsili çizim" }
    },
    {
      slug: "spanish-lunch-with-mireia-and-teachers", date: "2026-10-28", category: "Experiences", location: "Móra d’Ebre", image: "4_paiva_kuva.jpg",
      title: { en: "A Spanish lunch with Mireia and the teachers", fi: "Espanjalainen lounas Mireian ja opettajien kanssa", tr: "Mireia ve öğretmenlerle İspanyol öğle yemeği" },
      summary: {
        en: "We finally slept in, had a traditional Spanish lunch with Mireia and the teachers, and learned how pa amb tomàquet is prepared.",
        fi: "Saimme vihdoin nukkua pidempään, söimme perinteisen espanjalaisen lounaan Mireian ja opettajien kanssa ja opin, miten pa amb tomàquet valmistetaan.",
        tr: "Sonunda daha uzun uyuduk, Mireia ve öğretmenlerle geleneksel bir İspanyol yemeği yedik ve pa amb tomàquet’in nasıl hazırlandığını öğrendik."
      },
      paragraphs: {
        en: [
          "We finally got to sleep a bit longer. The only plan for the day was a lunch at 3 p.m. with Mireia and the other teachers. They offered us traditional Spanish food and we got to taste several different dishes.",
          "I learned, for example, that Spanish people like to eat bread in a certain way: pa amb tomàquet. First, the bread is warmed, then a halved tomato is rubbed over the surface so that the juice and flesh stick to the bread. Olive oil and jamón are added on top, and I like to add cheese as well. Finally, a little salt and garlic powder are sprinkled over it — and I would definitely recommend a pinch of black pepper too, because it was delicious!",
          "They also brought us two different kinds of fish: one was salmon and the other was some local Spanish fish whose name I had never heard before. Everyone was very kind, and we had a lovely time talking with the teachers. After the lunch, we went back home. These first days had been full of group meetings, and on Thursday we would finally begin the actual work."
        ],
        fi: [
          "Saimme vihdoin nukkua vähän pidempään. Päivän ainoa suunnitelma oli kello 15, jolloin menimme syömään Mireian ja muiden opettajien kanssa. He tarjosivat meille perinteistä espanjalaista ruokaa, ja pääsimme maistelemaan eri herkkuja.",
          "Opin esimerkiksi, että espanjalaiset pitävät leivän syömisestä tietyllä tavalla: leipä lämmitetään ensin, minkä jälkeen halkaistua tomaattia hierotaan leivän pintaan niin, että sen neste tarttuu leipään. Päälle laitetaan oliiviöljyä ja ilmakuivattua kinkkua (itse tykkään laittaa lisäksi juustoa). Lopuksi ripotellaan vielä suolaa ja valkosipulijauhetta – ja itse voisin suositella myös hieman mustapippuria, ai että se oli hyvää!",
          "Lisäksi he toivat meille kahta erilaista kalaa: toinen oli lohta ja toinen jotain paikallista espanjalaista kalaa, jonka nimeä en ollut ikinä kuullutkaan. Ihmiset olivat todella mukavia, ja meillä oli ihana hetki jutella eri opettajien kanssa.",
          "Ruokailun jälkeen palasimme kotiin. Kotona aloimme puhua ja suunnitella huomista tapaamista Mireian ja paikallisten IT-alan opiskelijoiden kanssa. Meidän piti valmistaa esitys, jossa kerromme itsestämme, kotikaupungistamme, maastamme sekä siitä, mitä olemme tekemässä täällä. Keskustelimme tyttöjen kanssa työjaosta ja siitä, mitä kaikkea aiomme sanoa. Sovimme, että minä kokoan asiat PowerPoint-esitykseksi ja tytöt hoitavat esittämisen huomenna.",
          "Nämä ensimmäiset päivät olivat olleet varattuina yhteisiin tapaamisiin, ja perjantaina meillä alkaisivatkin jo varsinaiset työt!"
        ],
        tr: [
          "Sonunda biraz daha uzun uyuyabildik. Günün tek planı saat 15:00’te Mireia ve diğer öğretmenlerle birlikte öğle yemektir. Bize geleneksel İspanyol yemekleri sundular ve birkaç farklı lezzeti tatma fırsatı bulduk.",
          "Örneğin, İspanyollar ekmeği belirli bir şekilde yemeyi seviyor: pa amb tomàquet. Önce ekmek ısıtılıyor, ardından ikiye bölünmüş domates ekmeğin yüzeyine ovularak suyu ve etli kısmı ekmeğe yapışıyor. Üzerine zeytinyağı ve kurutulmuş jambon ekleniyor; ben ayrıca peynir de koymayı seviyorum. Son olarak tuz ve sarımsak tozu serpilip, ben biraz karabiber de eklemeyi öneririm çünkü çok lezzetliydi!",
          "Ayrıca bize iki farklı balık getirdiler: biri somon, diğeri ise adını hiç duymadığım yerel bir İspanyol balığıydı. İnsanlar gerçekten çok nazikti ve öğretmenlerle güzel bir sohbet ortamı oluştu. Öğle yemeğinin ardından eve döndük. Bu ilk günler toplantılarla doluydu ve perşembe günü gerçek işlere başlayacaktık."
        ]
      },
      tags: ["daily life", "culture"], imageAlt: { en: "Illustrated placeholder for a Spanish lunch with Mireia and the teachers", fi: "Kuvituksellinen paikkamerkki espanjalaisesta lounaasta Mireian ja opettajien kanssa", tr: "Mireia ve öğretmenlerle İspanyol öğle yemeği için temsili çizim" }
    },
    {
      slug: "meeting-in-barcelona-and-arrival-in-mora-debre", date: "2026-10-26", category: "Experiences", location: "Barcelona · Móra d’Ebre", image: "2_paiva_kuva.jpeg",
      title: { en: "Meeting in Barcelona and arrival in Móra d’Ebre", fi: "Tapaaminen Barcelonassa ja saapuminen Móra d’Ebreen", tr: "Barselona'da buluşma ve Móra d’Ebre'ye varış" },
      summary: {
        en: "After a meeting with our employer in Barcelona, we bought train tickets, travelled onward to Móra la Nova and walked to our Airbnb in Móra d’Ebre.",
        fi: "Barcelonassa työnantajamme tapaamisen jälkeen ostimme junaliput, matkustimme Móra la Novaan ja kävelimme Airbnb-kämpällemme Móra d’Ebreen.",
        tr: "Barselona'daki işverenimizle görüşmenin ardından biletlerimizi aldık, Móra la Nova'ya geçtik ve Airbnb'mize Móra d’Ebre'de yürüyerek ulaştık."
      },
      paragraphs: {
        en: [
          "We woke up at seven and had a quick breakfast at the hotel. We were planning the day: at ten o’clock we had a meeting with our employer, Emilio, at his Barcelona headquarters. After that, the plan was to buy train tickets, travel to Móra la Nova and walk from there to our Airbnb in Móra d’Ebre.",
          "After breakfast, we got ready for the meeting, checked out of the hotel and ordered an Uber. This time it was easy to find the car and it took us straight to the office. At the office, Emilio explained what the project would involve and what kind of work we would be doing during the internship period.",
          "After the meeting, Emilio helped us buy our train tickets and walked with us to the station. This was our first time travelling by Spanish train, and we had already heard from other contacts that trains here are not always punctual or predictable. On the way, Emilio showed us some nice places along the route, and we managed to take beautiful photos.",
          "The train surprised us quite a lot: there was no display inside the carriage showing where we were, where the next stop was, or anything like that. The stations did not make any announcements and there was not even a member of staff on board that we could ask for help. We were definitely a bit lost, but eventually we managed to get off at the right stop in Móra la Nova.",
          "From the station, we had to walk to the Airbnb in Móra d’Ebre, which was about a 30-minute walk. When we arrived, the girls went to get food from the nearest kebab place while I stayed behind to look around the apartment. After they came back, we ate together and finally went to sleep."
        ],
        fi: [
          "Heräsimme kello seitsemän ja kävimme syömässä pienen aamupalan hotellilla. Mietimme samalla päivän suunnitelmaa: kello 10 meillä olisi tapaaminen työnantajamme Emilion kanssa heidän Barcelonan-päätoimistossaan. Tapaamisen jälkeen tarkoituksena oli ostaa junaliput, matkustaa Móra la Novaan ja kävellä sieltä meidän Airbnb-kämpällemme, joka sijaitsee Móra d’Ebressä.",
          "Kun aamupala oli syöty, aloimme valmistautua tapaamiseen. Otimme tavaramme, teimme check-outin hotellista ja tilasimme Uberin päästäksemme matkaan. Tällä kertaa löysimme Uberin vaivattomasti, ja se vei meidät suoraan tapaamispaikalle.",
          "Toimistolla tapasimme Emilion. Hän alkoi selittää meille, mitä kaikkea tulemme tekemään ja millainen projekti meillä on edessä tämän harjoittelujakson aikana. Tapaamisen jälkeen Emilio auttoi meitä tilaamaan junaliput ja saattoi meidät kävellen juna-asemalle. Tämä oli meille ensimmäinen kerta Espanjan junilla, ja olimme kuulleet aikaisemmin muilta kontaktihenkilöiltä, että junat kulkevat täällä vähän miten sattuu.",
          "Kävelymatkan aikana Emilio näytti meille kivoja paikkoja reitin varrelta, ja saimmekin otettua kauniita kuvia. Juna hämmästytti meitä melko paljon: vaunun sisällä ei ollut lainkaan näyttöä, josta näkisi, missä mennään tai mikä on seuraava pysäkki. Asemista ei kuulutettu mitään, eikä junassa näkynyt edes työntekijää, jolta olisimme voineet kysyä neuvoa! Olimme kieltämättä aika hukassa, mutta lopulta pääsimme kuin pääsimmekin oikealle pysäkille Móra la Novaan.",
          "Asemalta meidän piti kävellä Móra d’Ebreen Airbnb-talollemme. Kävelymatkaa oli noin 30 minuuttia. Kun pääsimme perille, tytöt kävivät hakemassa ruokaa lähimmästä kebabpaikasta, ja minä jäin sillä aikaa tutkimaan asuntoa. Kun tytöt palasivat, söimme yhdessä ja kävimme lopulta nukkumaan."
        ],
        tr: [
          "Sabah yedide uyandık ve otelde hafif bir kahvaltı yaptık. Günün planını konuşuyorduk: saat onda Barcelonan merkezindeki işverenimiz Emilio ile görüşmemiz vardı. Görüşmenin ardından tren biletlerini alıp Móra la Nova’ya geçip oradan Airbnb’mize Móra d’Ebre’de yürümeyi planlamıştık.",
          "Kahvaltıdan sonra hazırlandık, otelden çıktık ve Uber çağırdık. Bu kez Uber’i kolayca bulduk ve bizi doğrudan ofise götürdü. Ofisinde Emilio projeyle ilgili ne yapacağımızı ve staj döneminde nasıl çalışacağımızı anlattı.",
          "Görüşmeden sonra Emilio bize tren biletlerini alırken yardımcı oldu ve birlikte istasyona yürüdük. Bu, İspanya trenleriyle ilk yolculuğumuzdu ve daha önce başka kişilerden duymuştuk ki burada trenler bazen hiç beklenmedik şekilde çalışıyor. Yolda Emilio yol boyunca güzel yerleri gösterdi ve güzel fotoğraflar çekmeyi başardık.",
          "Tren bizi oldukça şaşırttı: vagon içindeki ekranda neredeyiz, hangi durak gelecek gibi bilgiler yoktu. İstasyonlarda hiçbir anons yapılmıyordu ve içinde sorabileceğimiz bir çalışan da görünmüyordu. Kesinlikle biraz kaybolmuştuk, ama sonunda Móra la Nova’da doğru durakta inmeyi başardık.",
          "İstasyondan Móra d’Ebre’deki Airbnb’mize yürümemiz gerekiyordu; bu yürüyüş yaklaşık 30 dakika sürüyordu. Oraya vardığımızda kızlar en yakın kebapçiden yemek almaya giderken ben apartmanı incelemeye kaldım. Kızlar döndüğünde birlikte yemek yedik ve sonunda uykuya gittik."
        ]
      },
      tags: ["work in progress", "daily life"], imageAlt: { en: "Illustrated placeholder for a meeting in Barcelona and arrival in Móra d’Ebre", fi: "Kuvituksellinen paikkamerkki tapaamisesta Barcelonassa ja saapumisesta Móra d’Ebreen", tr: "Barselona'daki buluşma ve Móra d’Ebre’ye varış için temsili çizim" }
    },
    {
      slug: "getting-to-know-mora-debre-and-the-school", date: "2026-10-27", category: "Experiences", location: "Móra d’Ebre" , image: "3_paiva_kuva.jpg",
      title: { en: "Getting to know Móra d’Ebre and the school", fi: "Tutustuminen Móra d’Ebreen ja oppilaitokseen", tr: "Móra d’Ebre ve okulunu tanımak" },
      summary: {
        en: "We walked to the school, met our coordinator Mireia and explored the town with local students before a relaxed evening in Móra d’Ebre.",
        fi: "Kävelimme oppilaitokselle, tapasimme koordinaattori Mireian ja tutustuimme kaupunkiin paikallisten opiskelijoiden kanssa ennen rauhallista iltaa Móra d’Ebressä.",
        tr: "Okula yürüyerek gittik, koordinatör Mireia ile tanıştık ve yerel öğrencilerle birlikte kasabayı gezdik; ardından Móra d’Ebre'de sakin bir akşam geçirdik."
      },
      paragraphs: {
        en: [
          "We woke up at seven with the girls and started planning the day. At ten o’clock we had a meeting with Mireia, the coordinator of the receiving school. Our Airbnb was about a 20-minute walk away from the school, and the whole route was uphill, so by the time we arrived we were already a bit exhausted.",
          "At first, we thought the meeting would mainly be a school introduction, but we were pleasantly surprised. As soon as we met Mireia, she started showing us around and introducing us to the area around Móra d’Ebre. Along the way, she also introduced us to other IT students. One of them had spent some time on exchange at our school, Eduk, a few years earlier, and we immediately became friends with them. They joined our tour and helped us get to know the town better.",
          "After the walk, we went to one of the biggest grocery stores in town to buy food and other essentials for the apartment. After that, we returned home to rest for a while. In the evening we went for another walk to explore the nearby area before going to sleep."
        ],
        fi: [
          "Heräsimme tyttöjen kanssa kello seitsemän ja aloimme suunnitella päivän ohjelmaa. Kello 10 meillä oli tapaaminen vastaanottavan oppilaitoksen koordinaattorin, Mireian, kanssa. Kämpältämme oppilaitokselle oli noin 20 minuutin kävelymatka. Koko reitti oli pelkkää ylämäkeä, joten perille päästyämme olimme jo valmiiksi vähän poikki!",
          "Luulimme aluksi, että tapaamisessa meille vain esiteltäisiin koulu, mutta saimmekin iloisen yllätyksen: heti tavattuamme Mireia lähti esittelemään ja tutustuttamaan meitä Móra d’Ebren ympäristöön. Matkan varrella Mireia tutustutti meidät myös muihin IT-alan opiskelijoihin. Yksi heistä oli ollut muutama vuosi sitten vaihdossa meidän koulullamme Edukossa, ja ystävystyimme heidän kanssaan nopeasti. He tulivatkin mukaan kierrokselle näyttämään meille kaupunkia.",
          "Kävelykiertueen jälkeen kävimme yhdessä kaupungin yhdessä isoimmista ruokakaupoista hakemassa ruokaostokset ja muut tarvittavat tavarat kämpille. Sen jälkeen palasimme kotiin lepäämään hetkeksi. Illalla kävimme vielä kävelyllä tutustumassa lisää lähialueeseen ennen nukkumaanmenoa."
        ],
        tr: [
          "Kızlarla birlikte sabah yedide uyandık ve günün planını yapmaya başladık. Saat onda kabul eden okulun koordinatörü Mireia ile görüşmemiz vardı. Evimizden okula yürüyerek yaklaşık 20 dakika sürüyordu ve bütün yol yukarıydı; bu yüzden okula vardığımızda çoktan biraz yorgun olmuştuk.",
          "Başta toplantının sadece okulu tanıtmak için yapılacağını düşünmüştük ama hoş bir sürprizle karşılaştık. Mireia ile tanışır tanışmaz bizi Móra d’Ebre çevresini gezdirmeye ve tanıtmaya başladı. Yol boyunca Mireia bizi diğer BT öğrencileriyle de tanıştırdı. Onlardan biri birkaç yıl önce bizim okulumuz Eduko’da değişim programında bulunmuştu; onunla çok hızlı arkadaş olduk. Onlar da gezimize katılarak kasabayı daha iyi tanıtmamıza yardımcı oldular.",
          "Yürüyüş turunun ardından kasabanın en büyük marketlerinden birine birlikte gidip ev için gıda ve diğer gerekli malzemeleri aldık. Sonrasında eve dönüp kısa bir süre dinlendik. Akşam ise uyumadan önce çevreyi daha fazla keşfetmek için tekrar yürüyüşe çıktık."
        ]
      },
      tags: ["daily life", "work in progress"], imageAlt: { en: "Illustrated placeholder for getting to know Móra d’Ebre and the school", fi: "Kuvituksellinen paikkamerkki tutustumisesta Móra d’Ebreen ja oppilaitokseen", tr: "Móra d’Ebre ve okulu tanımaya dair temsili çizim" }
    },
    {
      slug: "first-day-in-barcelona", date: "2026-10-25", category: "Experiences", location: "Barcelona", image: "1_paiva_kuva.jpeg",
      title: { en: "The First Day in Barcelona", fi: "Ensimmäinen päivä Barcelonassa", tr: "Barselona'daki ensimmäinen päivä" },
      summary: {
        en: "A long travel day brought homesickness, a massage-chair test, a confusing Uber pickup and an exhausted first night in Barcelona.",
        fi: "Pitkä matkustuspäivä toi mukanaan koti-ikävää, hierontatuolin testaamista, hämmentävän Uber-noudon ja väsyneen ensimmäisen yön Barcelonassa.",
        tr: "Uzun bir yolculuk günü; memleket özlemi, masaj koltuğu denemesi, kafa karıştıran bir Uber buluşması ve Barselona'da yorgun bir ilk geceyle geçti."
      },
      paragraphs: {
        en: [
          "The alarm went off at seven in the morning. It was time to get up, check the last things and pack the rest of my electronics. After that, we had a proper, filling breakfast: our flight was leaving at 4:55 p.m. and was due to arrive at 7:55 p.m. Once we had eaten, we waited for our ride to the airport.",
          "The drive to the airport was pleasant, but I immediately felt a little homesick and realised I would not see my family again until December. Still, life goes on, and luckily technology has come far enough for us to call and see each other on video. I was going on exchange with two amazing people, Emilia and Noora.",
          "At the airport, we checked our suitcases straight in and then explored. We found a massage chair and, of course, had to try it! It was comfortable, but also a little funny. Eventually we boarded and took our seats. The flight lasted four hours. Being able to buy internet access and get online on a plane these days is brilliant; otherwise, the journey would have been very boring.",
          "Eventually our plane landed at Barcelona Airport. We went to collect our suitcases. At first I was completely lost about where to pick them up, but we found them in the end. It is a strange feeling to realise that you are no longer in your home country, but somewhere else entirely, where you know almost nothing and do not speak the language.",
          "After collecting our bags and leaving the airport, we planned to go to the hotel we had booked, which was supposed to be nearby. Before the trip, we had thought we could simply walk there, but it turned out to be an hour and a half away on foot! So we decided to order an Uber. The pickup was a little confusing: the map app asked us to choose a pickup point somewhere other than where we were so the driver could find us. We selected the nearest spot, but could not find it ourselves.",
          "The Uber had already arrived while we were still trying to work out where the car was. The driver messaged to say he was waiting. We apologised and explained that we could not find the spot straight away, and asked if he could wait a little. Luckily, he was kind and waited. About ten minutes later, we found the Uber.",
          "The Uber took us to the hotel where we had a reservation. We checked in, only to get a small surprise: our room was in a completely different building, so we had to walk there too, already exhausted. When we arrived, the door was supposed to open with a card, but it would not work no matter how many times we tried. Just before we were about to walk back to reception, we tried once more and the door finally clicked open.",
          "At last we got into the room, where more surprises were waiting. The lights did not work properly, and when they switched off by themselves, the electricity went out too. There were three of us but only two towels, and there was not even any soap in the bathroom. By then it was so late that the nearby restaurants had closed, and we were desperately hungry and thirsty. We decided not to drink the tap water, so the girls went to a little nearby shop, a bit like a convenience kiosk, which was luckily still open. They came back with some snacks and water, and finally we went to sleep."
        ],
        fi: [
          "Herätys soi kello seitsemän aamulla. Oli aika nousta ylös, tarkistaa viimeiset asiat ja pakata loput elektroniikkalaitteet. Sen jälkeen söimme kunnollisen ja täyttävän aamupalan: lentomme lähtisi kello 16.55 ja saapuisi perille kello 19.55. Aamupalan jälkeen odotimme kyytiä lentokentälle.",
          "Matka lentokentälle oli mukava, mutta mielessäni kävi heti pieni koti-ikävä ja ajatus siitä, että näkisin perheeni seuraavan kerran vasta joulukuussa. Ei se kuitenkaan mitään — elämä jatkuu, ja onneksi teknologia on kehittynyt niin pitkälle, että voimme soitella ja nähdä toisiamme videopuheluissa. Lähdin vaihtoon kahden mahtavan tyypin, Emilian ja Nooran, kanssa.",
          "Lentokentälle saavuttuamme annoimme matkalaukut heti ruumaan ja jatkoimme ympäristön tutkimista. Löysimme hierontatuolin, ja totta kai meidän piti testata sitä! Se oli mukava mutta vähän koominen kokemus. Lopulta pääsimme koneeseen ja istahdimme omille paikoillemme. Lento kesti neljä tuntia. On mahtavaa, että nykyään lentokoneessa voi ostaa internetyhteyden ja päästä nettiin — muuten matka olisi ollut todella tylsä!",
          "Lopulta koneemme laskeutui Barcelonan lentokentälle. Kävimme hakemassa matkalaukut. Olin aluksi aivan hukassa sen suhteen, mistä ne piti hakea, mutta löysimme ne kuitenkin. On jännä tunne tajuta, ettei olekaan enää kotimaassa vaan aivan toisessa maassa, josta ei tiedä juuri mitään eikä osaa kieltä.",
          "Laukut haettuamme ja lentokentältä päästyämme suunnitelmana oli mennä varaamaamme hotelliin, jonka piti olla lähellä. Olimme ennen matkaa ajatelleet, että voisimme vain kävellä sinne, mutta hotellille olikin puolentoista tunnin kävelymatka! Niinpä päätimme tilata Uberin. Noutopaikan valitseminen oli vähän hämmentävää: karttasovellus pyysi asettamaan noutopaikaksi jonkin muun sijainnin kuin sen, jossa olimme, jotta kuljettaja löytäisi meidät. Valitsimme lähimmän paikan, mutta emme itse löytäneet sitä.",
          "Uber oli jo saapunut, ja me yritimme edelleen selvittää, missä ihmeessä auto mahtoi olla. Kuljettaja laittoi viestiä, että hän odotti. Pahoittelimme kovasti ja selitimme, ettemme löytäneet paikkaa heti. Kysyimme, voisiko hän odottaa hetken. Onneksi hän oli mukava ja odotti meitä. Noin kymmenen minuutin päästä löysimme Uberin.",
          "Uber vei meidät hotelliin, johon meillä oli varaus. Teimme sisäänkirjautumisen, mutta saimme pienen yllätyksen: huoneemme olikin aivan eri rakennuksessa, joten sinne piti taas kävellä, vaikka olimme jo aivan poikki. Perillä oven piti aueta kortilla, mutta se ei auennut millään, vaikka kokeilimme monta kertaa. Juuri kun olimme aikeissa kävellä takaisin vastaanottoon, kokeilimme vielä kerran — ja ovi vihdoin napsahti auki.",
          "Pääsimme vihdoin huoneeseen, mutta vastassa oli uusia yllätyksiä. Valot eivät toimineet kunnolla, ja kun ne sammuivat itsekseen, myös sähköt menivät poikki. Meitä oli kolme, mutta pyyhkeitä oli vain kahdelle, eikä vessassa ollut edes saippuaa. Kello oli jo niin paljon, että lähialueen ravintolat olivat menneet kiinni, ja meillä oli järkyttävä nälkä ja jano. Päätimme, ettemme joisi hanavettä, joten tytöt lähtivät pienelle lähikaupalle, joka oli vähän kuin R-kioski. Onneksi se oli vielä auki, ja saimme pikkupurtavaa ja vettä. Kun tytöt tulivat takaisin, kävimme vihdoin nukkumaan."
        ],
        tr: [
          "Sabah saat yedide alarm çaldı. Kalkıp son kontrolleri yapmak ve kalan elektronik eşyaları toplamak gerekiyordu. Ardından güzel ve doyurucu bir kahvaltı yaptık; uçağımız saat 16.55'te kalkacak ve 19.55'te varacaktı. Kahvaltıdan sonra bizi havaalanına götürecek aracı bekledik.",
          "Havaalanına yolculuk keyifliydi ama hemen biraz memleket özlemi hissettim ve ailemi bir sonraki kez ancak aralık ayında göreceğimi düşündüm. Yine de hayat devam ediyor; neyse ki teknoloji, telefonla konuşup görüntülü aramalarla birbirimizi görebileceğimiz kadar gelişti. Değişim programına iki harika kişiyle, Emilia ve Noora'yla birlikte gidiyordum.",
          "Havaalanına varınca valizlerimizi hemen bagaja verdik ve etrafı keşfetmeye başladık. Bir masaj koltuğu bulduk ve tabii ki denememiz gerekiyordu! Rahat ama biraz da komik bir deneyimdi. Sonunda uçağa binip yerlerimize oturduk. Uçuş dört saat sürdü. Günümüzde uçakta internet satın alıp çevrimiçi olabilmek harika; yoksa yolculuk gerçekten çok sıkıcı geçerdi!",
          "Sonunda uçağımız Barselona Havalimanı'na indi. Valizlerimizi almaya gittik. İlk başta onları nereden alacağımı hiç anlayamadım ama sonunda bulduk. Artık kendi ülkemde değil, hakkında pek bir şey bilmediğim ve dilini konuşamadığım başka bir ülkede olduğumu fark etmek tuhaf bir histi.",
          "Valizlerimizi alıp havaalanından çıktıktan sonra, yakında olması gereken rezervasyonlu otelimize gitmeyi planladık. Yolculuktan önce oraya yürüyebileceğimizi düşünmüştük ama otel yürüyerek bir buçuk saat uzaklıktaymış! Bu yüzden Uber çağırmaya karar verdik. Buluşma noktasını seçmek biraz kafa karıştırıcıydı: harita uygulaması, sürücünün bizi bulabilmesi için bulunduğumuz yerden farklı bir konum seçmemizi istedi. En yakın noktayı seçtik ama kendimiz bulamadık.",
          "Biz hâlâ arabanın nerede olduğunu anlamaya çalışırken Uber gelmişti. Sürücü beklediğini yazdı. Çok özür dileyip buluşma noktasını hemen bulamadığımızı açıkladık ve biraz bekleyip bekleyemeyeceğini sorduk. Neyse ki çok nazikti ve bizi bekledi. Yaklaşık on dakika sonra Uber'i bulduk.",
          "Uber bizi rezervasyon yaptırdığımız otele götürdü. Giriş işlemlerini yaptık ama küçük bir sürprizle karşılaştık: odamız tamamen başka bir binadaydı, bu yüzden zaten bitkin olmamıza rağmen oraya da yürümemiz gerekti. Vardığımızda kapının kartla açılması gerekiyordu ama defalarca denememize rağmen açılmadı. Resepsiyona geri dönmek üzereyken bir kez daha denedik ve kapı sonunda tık diye açıldı.",
          "Nihayet odaya girdik ama bizi başka sürprizler bekliyordu. Işıklar düzgün çalışmıyordu; kendi kendine söndüklerinde elektrik de kesiliyordu. Üç kişiydik ama yalnızca iki havlu vardı ve banyoda sabun bile yoktu. Yakındaki restoranlar kapanmıştı; çok aç ve susamıştık. Musluk suyu içmek istemediğimiz için kızlar, R-kioski'ye benzeyen yakındaki küçük bir dükkâna gitti. Neyse ki dükkân hâlâ açıktı, böylece atıştırmalık ve su alabildik. Kızlar dönünce sonunda uyumaya gittik."
        ]
      },
      tags: ["Barcelona", "arrival", "Erasmus+"],
      imageAlt: { en: "Illustrated placeholder for a first day in Barcelona", fi: "Kuvituksellinen paikkamerkki Barcelonan ensimmäisen päivän merkinnälle", tr: "Barselona'daki ilk gün için temsili çizim" }
    }
  ],
  gallery: [
    { id: "moment-1", category: "Everyday life", caption: { en: "A place to add a first memory", fi: "Paikka ensimmäiselle muistolle", tr: "İlk anıyı eklemek için bir yer" }, alt: { en: "Illustrated placeholder artwork; replace with a personal photograph", fi: "Kuvituksellinen paikkamerkki; korvaa henkilökohtaisella valokuvalla", tr: "Temsili çizim; kişisel bir fotoğrafla değiştirin" }, image: "photo-placeholder.svg" },
    { id: "moment-2", category: "Travel", caption: { en: "A view from the journey", fi: "Maisema matkan varrelta", tr: "Yolculuktan bir manzara" }, alt: { en: "Illustrated placeholder artwork; replace with a personal photograph", fi: "Kuvituksellinen paikkamerkki; korvaa henkilökohtaisella valokuvalla", tr: "Temsili çizim; kişisel bir fotoğrafla değiştirin" }, image: "photo-placeholder.svg" },
    { id: "moment-3", category: "Culture", caption: { en: "Details worth keeping", fi: "Säilyttämisen arvoisia yksityiskohtia", tr: "Saklamaya değer ayrıntılar" }, alt: { en: "Illustrated placeholder artwork; replace with a personal photograph", fi: "Kuvituksellinen paikkamerkki; korvaa henkilökohtaisella valokuvalla", tr: "Temsili çizim; kişisel bir fotoğrafla değiştirin" }, image: "photo-placeholder.svg" },
    { id: "moment-4", category: "Experiences", caption: { en: "An ordinary day, remembered", fi: "Tavallinen päivä muistona", tr: "Hatırlanan sıradan bir gün" }, alt: { en: "Illustrated placeholder artwork; replace with a personal photograph", fi: "Kuvituksellinen paikkamerkki; korvaa henkilökohtaisella valokuvalla", tr: "Temsili çizim; kişisel bir fotoğrafla değiştirin" }, image: "photo-placeholder.svg" },
    { id: "moment-5", category: "Travel", caption: { en: "Somewhere new to explore", fi: "Uusi paikka tutkittavaksi", tr: "Keşfedilecek yeni bir yer" }, alt: { en: "Illustrated placeholder artwork; replace with a personal photograph", fi: "Kuvituksellinen paikkamerkki; korvaa henkilökohtaisella valokuvalla", tr: "Temsili çizim; kişisel bir fotoğrafla değiştirin" }, image: "photo-placeholder.svg" },
    { id: "moment-6", category: "Daily life", caption: { en: "A small part of the story", fi: "Pieni osa tarinaa", tr: "Hikâyenin küçük bir parçası" }, alt: { en: "Illustrated placeholder artwork; replace with a personal photograph", fi: "Kuvituksellinen paikkamerkki; korvaa henkilökohtaisella valokuvalla", tr: "Temsili çizim; kişisel bir fotoğrafla değiştirin" }, image: "photo-placeholder.svg" }
  ]
};
