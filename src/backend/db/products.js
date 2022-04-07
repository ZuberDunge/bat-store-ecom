import {
  v4 as uuid
} from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "18",
    qty: 1,
    rating: 5,
    label: "Best Seller",
    title: " Devil's Reign: Moon Knight (2022) #1 ",
    imgSrc: "https://i.annihil.us/u/prod/marvel/i/mg/c/f0/6217ed8c8c9cc/clean.jpg",
    author: " Jed Mackay",
    published_date: "March 09, 2022  ",
    price: 3499,
    discount: 50,
    categoryName: "MARVEL",
    summary: "After being arrested by the Thunderbolts as part of WILSON FISK’S crackdown on costumed heroes, MOON KNIGHT is now a prisoner in the high-tech Myrmidon. Surrounded by hostile guards and many of the very criminals he helped put away, MARC SPECTOR must fight for his survival. But Moon Knight’s quest for justice doesn’t end just because of a little light incarceration…  ",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["MOONKNIGHT"],
    stockAvailability: true,
  },
  {
    _id: "11",
    qty: 1,
    rating: 4,
    label: "Latest",
    title: "Deadpool (2019) #10",
    imgSrc: "https://i.annihil.us/u/prod/marvel/i/mg/b/f0/6009ea34cb4cf/clean.jpg",
    author: "Kelly Thompson",
    published_date: "January 27, 2021    ",
    price: 2499,
    discount: 20,
    categoryName: "MARVEL",
    summary: "KING OF THE MONSTERS VERSUS KING OF THE DRAGONS! An evil, ancient cult wants to kill DEADPOOL. An evil, ancient space god wants to kill Deadpool. Why does everyone want to kill Deadpool??? (I mean, we know why…)",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["DEADPOOL"],
    stockAvailability: true
  },
  {
    _id: "12",
    qty: 1,
    rating: 2,
    label: "Latest",
    title: "Captain America/Iron Man (2021) #1    ",
    imgSrc: "https://i.annihil.us/u/prod/marvel/i/mg/4/03/619e63463d022/clean.jpg",
    author: "Derek Landy",
    published_date: "December 08, 2021    ",
    price: 2499,
    discount: 20,
    categoryName: "MARVEL",
    summary: "A government agent turned Hydra provocateur stages a daring breakout on her way to prison, attracting the attention of both Iron Man and Captain America. When Steve and Tony realize they both have a connection to the slippery fugitive, they team up to track her down-only to discover she's not the only player on the board with big plans and sinister motives… Derek Landy (FALCON & WINTER SOLDIER; THE BLACK ORDER) and Angel Unzueta (IRON MAN; STAR WARS) team up to bring you a thrilling adventure starring a fan-favorite dynamic duo!",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["IRONAMAN", "CAPTAINAMERICA"],
    stockAvailability: true
  },
  {
    _id: "2",
    qty: 1,
    rating: 5,
    label: "Hot",
    title: "SUPERMAN: SON OF KAL-EL #5",
    imgSrc: "https://www.dccomics.com/sites/default/files/styles/blog_gallery_2015_700x600/public/SMSOKE_Cv5_var_00531_PRIDE_no_upc_6171a74dcdb350.09221043.jpeg?itok=31H6J-l6",
    author: "  Tom Taylor",
    published_date: "  Nov 16 2021",
    price: 2599,
    discount: 10,
    categoryName: "DC",
    summary: "Faster than fate. As powerful as hope. Able to lift us all. For all his great power, Jon Kent can’t save everyone, but that won’t stop him from trying. How much can Earth’s new Superman do before this Man of Steel buckles? And when he does, who swoops in to save Superman?",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "15",
    COD: "available",
    superHeroes: ["SUPERMAN"],
    stockAvailability: true
  },
  {
    _id: "3",
    qty: 1,
    rating: 3,
    label: "NEW",
    title: "BATMAN BEYOND: NEO-YEAR #1",
    imgSrc: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2022/03/BMB_NY_Cv1_00111_DIGITAL_623e25282953d5.73282295.jpg?itok=GyPdLNBt",
    author: "  Jackson Lanzing, Collin Kelly",
    published_date: "April 5, 2022",
    price: 2899,
    discount: 10,
    categoryName: "DC",
    summary: "Neo-Gotham is alive and has killed Bruce Wayne. It’s rejected Terry McGinnis as Batman and offered him the chance to escape. Terry turned it down—he is the city’s protector, and he will uphold the legacy of Batman. Now Neo-Gotham will do everything in its power to destroy Terry, including creating brand-new villains to fight him. Terry’s first year without Bruce Wayne begins…does he have a fighting chance? From the rising-star creative team of Collin Kelly and Jackson Lanzing (Kang the Conqueror) and Max Dunbar (Batman: Urban Legends, Robin), a new future for Batman Beyond has begun!",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "6",
    COD: "not available",
    superHeroes: ["BATMAN"],
    stockAvailability: true
  },
  {
    _id: "4",
    qty: 1,
    rating: 5,
    label: "20% Off",
    title: "ROBIN #11",
    imgSrc: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2022/02/ROBIN_Cv11_01111_DIGITAL_6201860a777231.99207121.jpg?itok=KyI4Nyt6",
    author: "NOt Available",
    published_date: "  Feb 22 2022",
    price: 1200,
    discount: 20,
    categoryName: "DC",
    summary: "They survived the League of Lazarus tournament! Damian, Flatline, Ravager, and Connor Hawke celebrate with the rest of the fighters, but their party quickly turns into another deadly fight! Secret crushes are revealed, hearts are broken, and Hawke has one last confrontation with an old enemy before he can return to his former life!",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["ROBIN"],
    stockAvailability: true
  },
  {
    _id: "5",
    qty: 1,
    rating: 2,
    label: "Trending",
    title: "SUICIDE SQUAD #3",
    imgSrc: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2021/04/SSQD_03_CV_6087364ae99910.30257968.jpg?itok=JZWoUVUu",
    author: "    Robbie Thompson",
    published_date: "  Apr 5 2022",
    price: 2999,
    discount: 30,
    categoryName: "DC",
    summary: "Don’t miss this crossover with Teen Titans Academy! Task Force X finds a new target, and it leads the clandestine team right to Teen Titans Academy. The devious and driven Amanda Waller continues her quest to form a more powerful Squad, and next on her list: the Titans’ new speedster, Bolt. But when the mysterious Red X gets in the way, he becomes Waller’s next target.",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "10",
    COD: "available",
    superHeroes: ["PEACEMAKER", "SUPERBOY"],
    stockAvailability: false
  },
  {
    _id: "6",
    qty: 1,
    rating: 2,
    label: "Best Seller",
    title: "BIRDS OF PREY #105 ",
    imgSrc: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/bop_105_5b356c881b4a36.03960799.jpg?itok=bMTkCucU",
    author: "  Gail Simone",
    published_date: "  Apr 18 2007",
    price: 1299,
    discount: 10,
    categoryName: "DC",
    summary: "Trapped in Russia, the Birds face off against the Secret Six — just as one of her team wrests control of the mission from Oracle! Plus, the return of a very cool character to the DCU!",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "18",
    COD: "available",
    superHeroes: ["HARLEYQUINN"],
    stockAvailability: true
  },

  {
    _id: "1",
    qty: 1,
    rating: 4,
    label: "Latest",
    title: "JUSTICE LEAGUE VOL. 1: THE TOTALITY",
    imgSrc: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/gn-covers/2018/11/JUSTLv1_TT_178-001_HD_5bea369b6cc5d7.18591307.jpg?itok=r5Lx2Pyf",
    author: "James T Tynion IV, Scott Snyder",
    published_date: "October 17, 2018",
    price: 1499,
    discount: 20,
    categoryName: "DC",
    summary: "Spinning out of the cataclysmic events of Dark Nights: Metal and JUSTICE LEAGUE: NO JUSTICE, the core members of the Justice League—Superman, Batman, Wonder Woman, Aquaman, the Flash and more—are reunited in all-new adventures! The League was forced to make an impossible decision...and now it’s time to face the consequences! The returning Martian Manhunter struggles to protect the team from an incoming threat that will shatter the world as they know it, while a familiar face strikes out on a dark path...This new title collects JUSTICE LEAGUE #1-7!",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["WONDERWOMAN", "BATMAN", "SUPERMAN", "FLASH", "CYBORG"],
    stockAvailability: true
  },

  {
    _id: "12",
    qty: 1,
    rating: 4,
    label: "Latest",
    title: "Captain America/Iron Man (2021) #1    ",
    imgSrc: "https://i.annihil.us/u/prod/marvel/i/mg/4/03/619e63463d022/clean.jpg",
    author: "Derek Landy",
    published_date: "December 08, 2021    ",
    price: 2499,
    discount: 20,
    categoryName: "MARVEL",
    summary: "A government agent turned Hydra provocateur stages a daring breakout on her way to prison, attracting the attention of both Iron Man and Captain America. When Steve and Tony realize they both have a connection to the slippery fugitive, they team up to track her down-only to discover she's not the only player on the board with big plans and sinister motives… Derek Landy (FALCON & WINTER SOLDIER; THE BLACK ORDER) and Angel Unzueta (IRON MAN; STAR WARS) team up to bring you a thrilling adventure starring a fan-favorite dynamic duo!",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["IRONAMAN", "CAPTAINAMERICA"],
    stockAvailability: true
  },
  {
    _id: "13",
    qty: 1,
    rating: 2,
    label: "Marvel",
    title: "Vision & The Scarlet Witch: The Saga Of Wanda And Vision  ",
    imgSrc: "https://i.annihil.us/u/prod/marvel/i/mg/d/70/5ff8dcf6929b4/clean.jpg",
    author: "Steve Englehart, Bill Mantlo, Jeph York",
    published_date: "January 13, 2021    ",
    price: 2499,
    discount: 20,
    categoryName: "MARVEL",
    summary: "Collects Giant-Size Avengers (1974) #4, Vision and the Scarlet Witch (1982) #1-4, Vision and the Scarlet Witch (1985) #1-12, West Coast Avengers (1985) #2. The unlikely romance between the Vision and the Scarlet Witch is one of the most famous Avengers storylines of all! Now, witness what happens when the two heroes finally get married and settle down in the suburbs! If you think they’re going to live the quiet life, think again! Wanda embraces her sorcerous heritage — but can a revelation about her family tree be believed? The Vision’s past threatens their future, as Ultron and the Grim Reaper strike! And things get even stranger when Wanda’s magic spells lead to the couple becoming…a family! That’s right, despite all odds the Scarlet Witch is pregnant — and now Wanda and Vision must prepare for the biggest responsibility of their lives!    ",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["WANDA", "VISION"],
    stockAvailability: false
  },
  {
    _id: "14",
    qty: 1,
    rating: 2,
    label: "Marvel",
    title: "Avengers (2018) #50 ",
    imgSrc: "https://i.annihil.us/u/prod/marvel/i/mg/8/03/619e6347512f0/clean.jpg",
    author: " Jason Aaron, Christopher Ruocchio",
    published_date: "January 13, 2021    ",
    price: 1499,
    discount: 20,
    categoryName: "MARVEL",
    summary: "COMMEMORATING LEGACY #750! Supersize extravaganza of Earth's mightiest action and surprises! Witness the jaw-dropping conclusion of 'World War She-Hulk!' Learn the true purpose of the prehistoric Avengers! Uncover the shocking secret of the Iron Inquisitor! Behold the most powerful collection of super-psychopaths that any Earth has ever seen! Watch the Avengers recruit some shocking new members! And follow the Ghost Rider on a quest for vengeance across the Multiverse that will spark an all-new era in Avengers history! Plus: A bonus story featuring Thor by Christopher Ruocchio and Steve McNiven!",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["IRONAMAN", "CAPTAINAMERICA"],
    stockAvailability: false
  },
  {
    _id: "15",
    qty: 1,
    rating: 4,
    label: "Best Seller",
    title: "Black Panther (2021) #3 ",
    imgSrc: "https://i.annihil.us/u/prod/marvel/i/mg/f/c0/61cf3ffcd85e3/clean.jpg",
    author: " John Ridley, Juni Ba",
    published_date: "January 26, 2022   ",
    price: 3999,
    discount: 50,
    categoryName: "MARVEL",
    summary: "CELEBRATING THE 200TH ISSUE OF BLACK PANTHER AS T'CHALLA TAKES ON THE X-MEN OF MARS! With assassins closing in and Wakanda's faith in him shaken, T'Challa goes to visit Storm on the newly terraformed Mars. But this will not be a happy reunion, as T'Challa has ulterior motives for his visit. And back home, Shuri discovers who is behind the attacks on Wakanda's secret agents, a revelation that will change everything…",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["BLACKPANTHER"],
    stockAvailability: true
  },
  {
    _id: "16",
    qty: 1,
    rating: 4,
    label: "Best Seller",
    title: "Amazing Spider-Man (1999) #687 ",
    imgSrc: "https://i.annihil.us/u/prod/marvel/i/mg/9/d0/57ed2d6239a8d/clean.jpg",
    author: " Dan Slott",
    published_date: "January 26, 2012   ",
    price: 1999,
    discount: 35,
    categoryName: "MARVEL",
    summary: "ENDS OF THE PART SIX. Doctor Octopus has a new Sinister Six: the Avengers! Can Spider-Man sacrifice one life to save the entire planet?    ",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["THOR", "IRONAMAN", "CAPTAINAMERICA", "SPIDERMAN", "HULK"],
    stockAvailability: true,
  },
  {
    _id: "17",
    qty: 1,
    rating: 4,
    label: "Best Seller",
    title: "    The Amazing Spider-Man (2018) #87 ",
    imgSrc: "https://i.annihil.us/u/prod/marvel/i/mg/6/b0/61cf4019594fd/clean.jpg",
    author: " Jed Mackay",
    published_date: "January 26, 2022   ",
    price: 1899,
    discount: 50,
    categoryName: "MARVEL",
    summary: "With NYC reeling from Doc Ock's attack, Captain America and Black Cat need to know something…if Ben Reilly is really down, is Peter Parker able to step up and be Spider-Man again? You may think you know where this story is going, but you do not.    ",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["THOR", "IRONAMAN", "CAPTAINAMERICA", "SPIDERMAN", "HULK"],
    stockAvailability: true,
  }, {
    _id: "19",
    qty: 1,
    rating: 5,
    label: "Best Seller",
    title: "     Loki: The God Who Fell To Earth ",
    imgSrc: "https://i.annihil.us/u/prod/marvel/i/mg/5/e0/5e0fa327a2652/clean.jpg",
    author: " Jed Mackay",
    published_date: "March 09, 2020  ",
    price: 1299,
    discount: 25,
    categoryName: "MARVEL",
    summary: "Collects Loki (2019) #1-5, material from War of the Realms: Omega (2019) #1. Loki is - Earth’s Mightiest Hero?! After dying a grisly death in WAR OF THE REALMS, the reborn Trickster learned a valuable lesson in warmongering: Don’t get caught. But now Loki has a whole new set of responsibilities — and his brother Thor isn’t about to let him walk away from them. Restless with his new duties, Loki seeks out the advice of the closest thing Midgard has to a king — Tony Stark, the invincible Iron Man! Close enough, right? But it turns out that Shellhead isn’t too happy to see Loki on account of all that stuff he did in the past. Now the God of Mischief/Stories/Evil/Chaos has to outsmart the cleverest man on Earth — or die (again) trying. Meanwhile, could Thor be hatching a mischievous plot of his own?    ",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["LOKI"],
    stockAvailability: true,
  },
  {
    _id: "20",
    qty: 1,
    rating: 5,
    label: "Best Seller",
    title: "    Ultimate Comics New Ultimates (2010) #1",
    imgSrc: "https://i.annihil.us/u/prod/marvel/i/mg/5/10/515f102a220eb/detail.jpg",
    author: " Jed Mackay",
    published_date: "March 09, 2010  ",
    price: 1299,
    discount: 35,
    categoryName: "MARVEL",
    summary: "If only a few super heroes survived the Ultimatum -- who is left to become the next super powered team to be reckoned with? The NEW Ultimates! With Thor gone, Loki takes his revenge unleashing the worst of Asgard on Earth. Iron Man must gather the heroes for their biggest Ultimates adventure yet. But who has made the final cut? And who can't be trusted? The Ultimates face evil once again and you'll never guess the new enemies they'll find...or should we say old friends? Superstar creators, JEPH LOEB and FRANK CHO (in his Ultimate Comics debut!) bring you the new face of the Ultimate line in NEW ULTIMATES: THOR REBORN! Parental Advisory ...$3.99    ",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["THOR", "HULK", "CAPTAINAMERICA", "BLACKPANTHER"],
    stockAvailability: true,
  },

  {
    _id: "7",
    qty: 1,
    rating: 5,
    label: "Hot",
    title: "INJUSTICE 2 VOL. 5",
    imgSrc: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/gn-covers/2019/05/INJUST2v5_138-001_HD_5ccb733ca3a065.91543742.jpg?itok=mXIhx18u",
    author: "  Tom Taylor",
    published_date: "  Apr 24 2019",
    price: 2599,
    discount: 40,
    categoryName: "DC",
    summary: "Condemned to a prison planet by the Guardians of Oa, Hal Jordan must come to grips with his role in Superman’s failed Regime. Haunted by visions of the past and berated by his guard, Soranik, the former Green Lantern takes out his anger on a new arrival. But then an attack on the prison might soon spell disaster for the Green Lantern Corps. Collects issues #25-30!",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "15",
    COD: "available",
    superHeroes: ["WONDERWOMAN", "BATMAN", "BATGIRL", "ROBIN", "CATWOMAN"],
    stockAvailability: true
  },
  {
    _id: "8",
    qty: 1,
    rating: 5,
    label: "50% Off",
    title: "PEACEMAKER: DISTURBING THE PEACE #1",
    imgSrc: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2022/01/PSSMKR_DTP_Cv1_00111_DIGITAL-1_61eaf1913ba484.59851254.jpg?itok=JQbCYqhQ",
    author: "  Garth Ennis",
    published_date: "  Jan 25 2022",
    price: 2999,
    discount: 50,
    categoryName: "DC",
    summary: "Long before joining the Suicide Squad, Christopher Smith, code name Peacemaker, meets with a psychiatrist—a woman dangerously obsessed with his bizarre and violent past. From his tragic childhood to his military service overseas to his multiple missions with Special Forces, Smith has more than his share of skeletons in the closet. But who’s actually analyzing whom? And will this trip down memory lane result in yet more fatalities?",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "6",
    COD: "not available",
    superHeroes: ["PEACEMAKER"],
    stockAvailability: true
  },
  {
    _id: "9",
    qty: 1,
    rating: 3,
    label: "New",
    title: "NIGHTWING #1",
    imgSrc: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/ntwng_v4_1_5b3574d1743cb4.96349046.jpg?itok=8zBMqvL4",
    author: "  Tim Seeley",
    published_date: "  Jul 27 2016",
    price: 1799,
    discount: 10,
    categoryName: "DC",
    summary: "“BETTER THAN BATMAN” Chapter One: Batman taught Nightwing everything he knows—but what if everything he taught him is wrong? When Dick is stuck with a new mentor who challenges everything Batman taught him, Nightwing has to shatter his concept of justice in order to fight for what he knows is right. Writer Tim Seeley (GRAYSON, BATMAN & ROBIN ETERNAL) launches Nightwing onto a new quest alongside rising talent Javier Fernandez (RED HOOD/ARSENAL).",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "8",
    COD: "available",
    superHeroes: ["BATMAN", "NIGHTWING", "ROBIN", "BATGRIL"],
    stockAvailability: true
  },
  {
    _id: "10",
    qty: 1,
    rating: 4,
    label: "Latest",
    title: "SENSATIONAL WONDER WOMAN SPECIAL #1 ",
    imgSrc: "https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2022/03/SWWSP_Cv1_00111_DIGITAL_6227dd280d61b4.04773412.jpg?itok=ePbSPxt8",
    author: "Stephanie Nicole Phillips, Scott Kolins, Paula Sevenbergen",
    published_date: "Mar 29 2022",
    price: 1299,
    discount: 15,
    categoryName: "DC",
    summary: "Wonder Woman stars in three sensational stories that will push her to her limits. Will the Amazon Princess come out on top after battling the likes of Circe, Blue Snowman, and the Threnn of Doom? Join us in this celebration of all things Wonder Woman for International Women’s Day!",
    offers: ["Get extra 5% off (price inclusive of discount)", "5% Unlimited Cashback on Axis Bank Credit Card", "Sign up for Pay Later and get Gift Card worth ₹100", "No Cost EMI on Bajaaj Finsexv EMI Card on cart value above ₹2999"],
    delivery: "Free",
    delivery_time: "10",
    COD: "available",
    superHeroes: ["WONDERWOMAN"],
    stockAvailability: true
  },
];