import { shuffleArticles, Flatten } from "./formatArray";
/*eslint-disable*/

const array1 = [
  {
    status: "OK",
    copyright:
      "Copyright (c) 2019 The New York Times Company. All Rights Reserved.",
    section: "science",
    last_updated: "2019-02-04T04:47:03-05:00",
    num_results: 29,
    results: [
      {
        section: "Science",
        subsection: "",
        title: "Flying Squirrels That Glow Pink in the Dark",
        abstract:
          "While ultraviolet fluorescence is common in birds, butterflies and sea creatures, scientists haven’t often observed it in mammals.",
        url:
          "https://www.nytimes.com/2019/02/01/science/pink-squirrels-glow.html",
        byline: "By VERONIQUE GREENWOOD",
        item_type: "Article",
        updated_date: "2019-02-01T12:42:18-05:00",
        created_date: "2019-02-01T12:42:18-05:00",
        published_date: "2019-02-01T12:42:18-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "your-feed-science",
          "Squirrels",
          "Ultraviolet Light",
          "Biology and Biochemistry",
          "Animals"
        ],
        org_facet: ["Journal of Mammalogy", "Texas A&M University"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/02TB-SQUIRREL1/02TB-SQUIRREL1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "In most circumstances, the flying squirrel has a brownish color, left. But ultraviolet light reveals them to glow hot-pink.",
            copyright: "Northland College"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/02TB-SQUIRREL1/02TB-SQUIRREL1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "In most circumstances, the flying squirrel has a brownish color, left. But ultraviolet light reveals them to glow hot-pink.",
            copyright: "Northland College"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/02TB-SQUIRREL1/02TB-SQUIRREL1-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "In most circumstances, the flying squirrel has a brownish color, left. But ultraviolet light reveals them to glow hot-pink.",
            copyright: "Northland College"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/02TB-SQUIRREL1/02TB-SQUIRREL1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "In most circumstances, the flying squirrel has a brownish color, left. But ultraviolet light reveals them to glow hot-pink.",
            copyright: "Northland College"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/02TB-SQUIRREL1/02TB-SQUIRREL1-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "In most circumstances, the flying squirrel has a brownish color, left. But ultraviolet light reveals them to glow hot-pink.",
            copyright: "Northland College"
          }
        ],
        short_url: "https://nyti.ms/2Uw5TWh"
      },
      {
        section: "Science",
        subsection: "",
        title: "How NASA’s Curiosity Rover Weighed a Mountain on Mars",
        abstract:
          "With a bit of technical improvisation, scientists worked out that the bedrock of Mount Sharp appeared to be less dense than had been expected.",
        url:
          "https://www.nytimes.com/2019/01/31/science/mars-curiosity-rover-mount-sharp.html",
        byline: "By KENNETH CHANG",
        item_type: "Article",
        updated_date: "2019-01-31T14:09:05-05:00",
        created_date: "2019-01-31T14:09:05-05:00",
        published_date: "2019-01-31T14:09:05-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Space and Astronomy",
          "Curiosity (Mars Rover)",
          "Mars (Planet)"
        ],
        org_facet: [
          "National Aeronautics and Space Administration",
          "Science (Journal)"
        ],
        per_facet: [
          "Grotzinger, John P",
          "Vasavada, Ashwin R",
          "Lewis, Kevin W"
        ],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01MARS-2-print/01MARS1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "A self-portrait taken by NASA's Curiosity rover in June 2018 in the Gale Crater, at the center of which stands Mount Sharp, a 3.4-mile-high mound.",
            copyright: "NASA/JPL-Caltech/MSSS"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01MARS-2-print/01MARS1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "A self-portrait taken by NASA's Curiosity rover in June 2018 in the Gale Crater, at the center of which stands Mount Sharp, a 3.4-mile-high mound.",
            copyright: "NASA/JPL-Caltech/MSSS"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01MARS-2-print/01MARS1-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "A self-portrait taken by NASA's Curiosity rover in June 2018 in the Gale Crater, at the center of which stands Mount Sharp, a 3.4-mile-high mound.",
            copyright: "NASA/JPL-Caltech/MSSS"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01MARS-2-print/01MARS1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "A self-portrait taken by NASA's Curiosity rover in June 2018 in the Gale Crater, at the center of which stands Mount Sharp, a 3.4-mile-high mound.",
            copyright: "NASA/JPL-Caltech/MSSS"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01MARS-2-print/merlin_149995341_9e8da6df-c631-4465-aa40-c720e129c3dc-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "A self-portrait taken by NASA's Curiosity rover in June 2018 in the Gale Crater, at the center of which stands Mount Sharp, a 3.4-mile-high mound.",
            copyright: "NASA/JPL-Caltech/MSSS"
          }
        ],
        short_url: "https://nyti.ms/2UyFNlH"
      },
      {
        section: "Science",
        subsection: "",
        title: "You Flushed the Toilet. They Made Some Bricks.",
        abstract:
          "Converting biosolids into building materials could keep a lot of leftovers of the waste process out of landfills, and provide other environmental benefits, too.",
        url:
          "https://www.nytimes.com/2019/01/31/science/bricks-recycled-bodily-waste.html",
        byline: "By JOANNA KLEIN",
        item_type: "Article",
        updated_date: "2019-02-01T00:42:04-05:00",
        created_date: "2019-01-31T21:03:53-05:00",
        published_date: "2019-01-31T21:03:53-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Brick and Tile",
          "Recycling of Waste Materials",
          "Waste Materials and Disposal",
          "Feces",
          "Building (Construction)",
          "your-feed-science"
        ],
        org_facet: ["Buildings (Journal)"],
        per_facet: ["Mohajerani, Abbas"],
        geo_facet: ["Australia"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/01TB-BIOBRICK/01TB-BIOBRICK-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Abbas Mohajerani holds a brick made with biosolid waste, or treated wastewater sludge.",
            copyright: "RMIT University"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/01TB-BIOBRICK/01TB-BIOBRICK-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Abbas Mohajerani holds a brick made with biosolid waste, or treated wastewater sludge.",
            copyright: "RMIT University"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/01TB-BIOBRICK/01TB-BIOBRICK-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Abbas Mohajerani holds a brick made with biosolid waste, or treated wastewater sludge.",
            copyright: "RMIT University"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/01TB-BIOBRICK/01TB-BIOBRICK-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Abbas Mohajerani holds a brick made with biosolid waste, or treated wastewater sludge.",
            copyright: "RMIT University"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/01TB-BIOBRICK/merlin_150014427_74fd7325-d226-4560-b11d-76b3d8fbef33-superJumbo.jpg",
            format: "superJumbo",
            height: 1366,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Abbas Mohajerani holds a brick made with biosolid waste, or treated wastewater sludge.",
            copyright: "RMIT University"
          }
        ],
        short_url: "https://nyti.ms/2Ge6LuM"
      },
      {
        section: "Science",
        subsection: "",
        title:
          "We Tried 5 Cold-Weather Experiments. Instant Slushies, Frozen Bubbles and More.",
        abstract:
          "With schools closed and temperatures well below zero, one family learned some hard lessons about the scientific process.",
        url:
          "https://www.nytimes.com/2019/01/31/science/polar-vortex-experiments.html",
        byline: "By KATIE THOMAS",
        item_type: "Article",
        updated_date: "2019-01-31T17:23:44-05:00",
        created_date: "2019-01-31T10:58:10-05:00",
        published_date: "2019-01-31T10:58:10-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Weather",
          "Education (K-12)",
          "Science and Technology",
          "Polar vortex",
          "your-feed-science",
          "science experiments"
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01FREEZE3/01FREEZE3-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Near Chicago, where the temperature reached a high of minus 10 degrees on Wednesday, reporter Katie Thomas pursued a few scientific inquiries. The bubbles did indeed freeze, but most were whipped away before they could be properly scrutinized.",
            copyright: "Danielle Scruggs for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01FREEZE3/01FREEZE3-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Near Chicago, where the temperature reached a high of minus 10 degrees on Wednesday, reporter Katie Thomas pursued a few scientific inquiries. The bubbles did indeed freeze, but most were whipped away before they could be properly scrutinized.",
            copyright: "Danielle Scruggs for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01FREEZE3/01FREEZE3-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Near Chicago, where the temperature reached a high of minus 10 degrees on Wednesday, reporter Katie Thomas pursued a few scientific inquiries. The bubbles did indeed freeze, but most were whipped away before they could be properly scrutinized.",
            copyright: "Danielle Scruggs for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01FREEZE3/01FREEZE3-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Near Chicago, where the temperature reached a high of minus 10 degrees on Wednesday, reporter Katie Thomas pursued a few scientific inquiries. The bubbles did indeed freeze, but most were whipped away before they could be properly scrutinized.",
            copyright: "Danielle Scruggs for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01FREEZE3/01FREEZE3-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Near Chicago, where the temperature reached a high of minus 10 degrees on Wednesday, reporter Katie Thomas pursued a few scientific inquiries. The bubbles did indeed freeze, but most were whipped away before they could be properly scrutinized.",
            copyright: "Danielle Scruggs for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2Gdl5DZ"
      },
      {
        section: "Science",
        subsection: "",
        title:
          "High Ceilings and a Lovely View: Denisova Cave Was Home to a Lost Branch of Humanity",
        abstract:
          "The mysterious Denisovans may have occupied a cave in what is now Siberia for more than 250,000 years.",
        url:
          "https://www.nytimes.com/2019/01/30/science/neanderthals-denisovans-humans.html",
        byline: "By CARL ZIMMER",
        item_type: "Article",
        updated_date: "2019-01-30T16:20:35-05:00",
        created_date: "2019-01-30T13:52:45-05:00",
        published_date: "2019-01-30T13:52:45-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Denisova Hominid",
          "Neanderthal Man",
          "Archaeology and Anthropology",
          "Fossils",
          "Caves and Caverns",
          "DNA (Deoxyribonucleic Acid)",
          "your-feed-science"
        ],
        org_facet: [
          "Oxford University",
          "Russian Academy of Sciences",
          "University of Exeter"
        ],
        per_facet: [],
        geo_facet: ["Denisova Cave (Siberia)"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/05SCI-ZIMMER1/05SCI-ZIMMER1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Researchers in the Denisova Cave in Siberia, including archaeologist Katerina Douka, second left. They have found that the cave was continuously occupied for over 300,000 years.",
            copyright: "Sergey Zelinski/Russian Academy of Sciences"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/05SCI-ZIMMER1/05SCI-ZIMMER1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Researchers in the Denisova Cave in Siberia, including archaeologist Katerina Douka, second left. They have found that the cave was continuously occupied for over 300,000 years.",
            copyright: "Sergey Zelinski/Russian Academy of Sciences"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/05SCI-ZIMMER1/05SCI-ZIMMER1-articleInline.jpg",
            format: "Normal",
            height: 132,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Researchers in the Denisova Cave in Siberia, including archaeologist Katerina Douka, second left. They have found that the cave was continuously occupied for over 300,000 years.",
            copyright: "Sergey Zelinski/Russian Academy of Sciences"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/05SCI-ZIMMER1/05SCI-ZIMMER1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Researchers in the Denisova Cave in Siberia, including archaeologist Katerina Douka, second left. They have found that the cave was continuously occupied for over 300,000 years.",
            copyright: "Sergey Zelinski/Russian Academy of Sciences"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/05SCI-ZIMMER1/merlin_149955018_38eaec76-9921-42ed-aadf-f6285a6138e3-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Researchers in the Denisova Cave in Siberia, including archaeologist Katerina Douka, second left. They have found that the cave was continuously occupied for over 300,000 years.",
            copyright: "Sergey Zelinski/Russian Academy of Sciences"
          }
        ],
        short_url: "https://nyti.ms/2G9HRg2"
      },
      {
        section: "Science",
        subsection: "",
        title: "Seeking Superpowers in the Axolotl Genome",
        abstract:
          "The smiling salamanders can regrow most of their body parts, so researchers are building improved maps of their DNA.",
        url:
          "https://www.nytimes.com/2019/01/29/science/axolotl-dna-genome-sequence.html",
        byline: "By STEPH YIN",
        item_type: "Article",
        updated_date: "2019-01-29T05:00:07-05:00",
        created_date: "2019-01-29T05:00:07-05:00",
        published_date: "2019-01-29T05:00:07-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Salamanders",
          "Amphibians",
          "Genetics and Heredity",
          "Medicine and Health",
          "your-feed-science",
          "axolotl"
        ],
        org_facet: ["Genome Research (Journal)"],
        per_facet: ["Keinath, Melissa", "Smith, Jeramiah J", "Voss, Randal"],
        geo_facet: ["Mexico"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/25/science/25tb-axolotl/25tb-axolotl-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "Look at this cheerful tube sock.",
            copyright: "Arno Burgi/picture alliance, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/25/science/25tb-axolotl/25tb-axolotl-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "Look at this cheerful tube sock.",
            copyright: "Arno Burgi/picture alliance, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/25/science/25tb-axolotl/merlin_149695563_424703c5-2aef-45a6-b84e-969e0559bb02-articleInline.jpg",
            format: "Normal",
            height: 126,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "Look at this cheerful tube sock.",
            copyright: "Arno Burgi/picture alliance, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/25/science/25tb-axolotl/25tb-axolotl-mediumThreeByTwo210-v2.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "Look at this cheerful tube sock.",
            copyright: "Arno Burgi/picture alliance, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/25/science/25tb-axolotl/merlin_149695563_424703c5-2aef-45a6-b84e-969e0559bb02-superJumbo.jpg",
            format: "superJumbo",
            height: 1363,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption: "Look at this cheerful tube sock.",
            copyright: "Arno Burgi/picture alliance, via Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2HDBvb2"
      },
      {
        section: "Health",
        subsection: "",
        title: "This Is Your Brain Off Facebook",
        abstract:
          "Planning on quitting the social platform? A major new study offers a glimpse of what unplugging might do for your life. (Spoiler: It’s not so bad.)",
        url:
          "https://www.nytimes.com/2019/01/30/health/facebook-psychology-health.html",
        byline: "By BENEDICT CAREY",
        item_type: "Article",
        updated_date: "2019-01-31T00:46:02-05:00",
        created_date: "2019-01-30T10:46:47-05:00",
        published_date: "2019-01-30T10:46:47-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Social Media",
          "Computers and the Internet",
          "Psychology and Psychologists",
          "Politics and Government",
          "Addiction (Psychology)",
          "Mental Health and Disorders"
        ],
        org_facet: ["Facebook Inc", "Stanford University"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/13/science/13FACEBOOK/13FACEBOOK-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Subjects in a Stanford study had to be paid $100 on average to quit Facebook for a month. At the end, they were less politically polarized than people in a comparison group.",
            copyright: "Marcio Jose Sanchez/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/13/science/13FACEBOOK/13FACEBOOK-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Subjects in a Stanford study had to be paid $100 on average to quit Facebook for a month. At the end, they were less politically polarized than people in a comparison group.",
            copyright: "Marcio Jose Sanchez/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/13/science/13FACEBOOK/13FACEBOOK-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Subjects in a Stanford study had to be paid $100 on average to quit Facebook for a month. At the end, they were less politically polarized than people in a comparison group.",
            copyright: "Marcio Jose Sanchez/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/13/science/13FACEBOOK/13FACEBOOK-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Subjects in a Stanford study had to be paid $100 on average to quit Facebook for a month. At the end, they were less politically polarized than people in a comparison group.",
            copyright: "Marcio Jose Sanchez/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/13/science/13FACEBOOK/merlin_137299038_bd0c3abe-4299-4ef4-894c-59a55f0afeaa-superJumbo.jpg",
            format: "superJumbo",
            height: 1340,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Subjects in a Stanford study had to be paid $100 on average to quit Facebook for a month. At the end, they were less politically polarized than people in a comparison group.",
            copyright: "Marcio Jose Sanchez/Associated Press"
          }
        ],
        short_url: "https://nyti.ms/2HHQCAb"
      },
      {
        section: "Health",
        subsection: "",
        title:
          "Germs in Your Gut Are Talking to Your Brain. Scientists Want to Know What They’re Saying.",
        abstract:
          "The body’s microbial community may influence the brain and behavior, perhaps even playing a role in dementia, autism and other disorders.",
        url:
          "https://www.nytimes.com/2019/01/28/health/microbiome-brain-behavior-dementia.html",
        byline: "By CARL ZIMMER",
        item_type: "Article",
        updated_date: "2019-01-28T13:32:48-05:00",
        created_date: "2019-01-28T13:32:48-05:00",
        published_date: "2019-01-28T13:32:48-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Microbiology",
          "Brain",
          "Alzheimer's Disease",
          "Digestive Tract",
          "Bacteria",
          "Epilepsy",
          "Antibiotics",
          "Emotions",
          "Diet and Nutrition",
          "Dementia",
          "Mental Health and Disorders",
          "Autism",
          "Probiotics",
          "your-feed-science"
        ],
        org_facet: [
          "California Institute of Technology",
          "Michigan State University",
          "University of California, Los Angeles",
          "University of Chicago"
        ],
        per_facet: ["van Leeuwenhoek, Antonie (1632-1723)", "Cryan, John F"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCIMICROBIOMECOVERFINAL/29SCIMICROBIOMECOVERFINAL-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Sean McSorley"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCIMICROBIOMECOVERFINAL/29SCIMICROBIOMECOVERFINAL-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Sean McSorley"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCIMICROBIOMECOVERFINAL/merlin_149740557_bce2a202-e5ca-4439-b9f9-74be76dee727-articleInline.jpg",
            format: "Normal",
            height: 222,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Sean McSorley"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCIMICROBIOMECOVERFINAL/29SCIMICROBIOMECOVERFINAL-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Sean McSorley"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCIMICROBIOMECOVERFINAL/merlin_149740557_bce2a202-e5ca-4439-b9f9-74be76dee727-superJumbo.jpg",
            format: "superJumbo",
            height: 2048,
            width: 1755,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Sean McSorley"
          }
        ],
        short_url: "https://nyti.ms/2SiOjI9"
      },
      {
        section: "Science",
        subsection: "",
        title:
          "Many Children Are Overdoing It on the Toothpaste, C.D.C. Study Says",
        abstract:
          "A new study found that nearly 40 percent of children ages 3 to 6 used more toothpaste than is recommended by dental professionals.",
        url:
          "https://www.nytimes.com/2019/02/03/science/too-much-toothpaste.html",
        byline: "By JULIA JACOBS",
        item_type: "Article",
        updated_date: "2019-02-03T05:00:04-05:00",
        created_date: "2019-02-03T05:00:04-05:00",
        published_date: "2019-02-03T05:00:04-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Fluorides",
          "Children and Childhood",
          "Teeth and Dentistry",
          "Toothbrushes and Toothpaste"
        ],
        org_facet: [
          "American Academy of Pediatric Dentistry",
          "American Dental Assn",
          "C.D.C."
        ],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/us/03xp-toothpaste/03xp-toothpaste-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Professional guidelines suggest this would be too much toothpaste on a young child’s brush. Children ages 3 to 6 should use no more than a pea-size amount of fluoride toothpaste, officials say.",
            copyright: "Elaine Thompson/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/us/03xp-toothpaste/03xp-toothpaste-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Professional guidelines suggest this would be too much toothpaste on a young child’s brush. Children ages 3 to 6 should use no more than a pea-size amount of fluoride toothpaste, officials say.",
            copyright: "Elaine Thompson/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/us/03xp-toothpaste/merlin_150105015_c2b1eb73-a6b7-4e36-a319-3a3650cd6425-articleInline.jpg",
            format: "Normal",
            height: 118,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Professional guidelines suggest this would be too much toothpaste on a young child’s brush. Children ages 3 to 6 should use no more than a pea-size amount of fluoride toothpaste, officials say.",
            copyright: "Elaine Thompson/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/us/03xp-toothpaste/03xp-toothpaste-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Professional guidelines suggest this would be too much toothpaste on a young child’s brush. Children ages 3 to 6 should use no more than a pea-size amount of fluoride toothpaste, officials say.",
            copyright: "Elaine Thompson/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/us/03xp-toothpaste/merlin_150105015_c2b1eb73-a6b7-4e36-a319-3a3650cd6425-superJumbo.jpg",
            format: "superJumbo",
            height: 1276,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Professional guidelines suggest this would be too much toothpaste on a young child’s brush. Children ages 3 to 6 should use no more than a pea-size amount of fluoride toothpaste, officials say.",
            copyright: "Elaine Thompson/Associated Press"
          }
        ],
        short_url: "https://nyti.ms/2UzArXh"
      },
      {
        section: "Health",
        subsection: "",
        title:
          "Clash of Giants: UnitedHealth Takes On Amazon, Berkshire Hathaway and JPMorgan Chase",
        abstract:
          "A lawsuit exposes how unnerved major insurers are by the Big Three’s new venture into health care benefits.",
        url:
          "https://www.nytimes.com/2019/02/01/health/unitedhealth-amazon-chase.html",
        byline: "By REED ABELSON",
        item_type: "Article",
        updated_date: "2019-02-01T19:18:33-05:00",
        created_date: "2019-02-01T19:18:33-05:00",
        published_date: "2019-02-01T19:18:33-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Health Insurance and Managed Care",
          "trade secrets",
          "your-feed-science"
        ],
        org_facet: [
          "Amazon.com Inc",
          "Berkshire Hathaway Inc",
          "JPMorgan Chase & Company",
          "Optum Inc",
          "UnitedHealth Group Inc"
        ],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/science/02OPTUM-print/31OPTUM-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "The headquarters of Optum, the unit of UnitedHealth that includes its pharmacy benefit manager, in Eden Prairie, Minn.",
            copyright: "Kristoffer Tripplaar/Alamy"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/science/02OPTUM-print/31OPTUM-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "The headquarters of Optum, the unit of UnitedHealth that includes its pharmacy benefit manager, in Eden Prairie, Minn.",
            copyright: "Kristoffer Tripplaar/Alamy"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/science/02OPTUM-print/31OPTUM-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "The headquarters of Optum, the unit of UnitedHealth that includes its pharmacy benefit manager, in Eden Prairie, Minn.",
            copyright: "Kristoffer Tripplaar/Alamy"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/science/02OPTUM-print/31OPTUM-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "The headquarters of Optum, the unit of UnitedHealth that includes its pharmacy benefit manager, in Eden Prairie, Minn.",
            copyright: "Kristoffer Tripplaar/Alamy"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/science/02OPTUM-print/merlin_149980476_0fe126d7-021c-4eb5-bbe1-8e7d9e4beb42-superJumbo.jpg",
            format: "superJumbo",
            height: 1366,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "The headquarters of Optum, the unit of UnitedHealth that includes its pharmacy benefit manager, in Eden Prairie, Minn.",
            copyright: "Kristoffer Tripplaar/Alamy"
          }
        ],
        short_url: "https://nyti.ms/2DOFyx7"
      },
      {
        section: "Health",
        subsection: "",
        title: "When Is the Surgeon Too Old to Operate?",
        abstract:
          "A handful of hospitals have instituted mandatory screening procedures for medical professionals over 70. Many have been unenthusiastic about the idea.",
        url:
          "https://www.nytimes.com/2019/02/01/health/surgeons-retirement-competence.html",
        byline: "By PAULA SPAN",
        item_type: "Article",
        updated_date: "2019-02-01T12:23:15-05:00",
        created_date: "2019-02-01T11:28:44-05:00",
        published_date: "2019-02-01T11:28:44-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Surgery and Surgeons",
          "Age, Chronological",
          "Discrimination",
          "Hospitals",
          "Elderly",
          "Deaths (Fatalities)",
          "Labor and Jobs"
        ],
        org_facet: [
          "American College of Surgeons",
          "Englewood Hospital and Medical Center",
          "JAMA Surgery (Journal)",
          "Sinai Hospital"
        ],
        per_facet: [],
        geo_facet: ["Baltimore (Md)", "Englewood (NJ)"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/05SCI-SPAN/05SCI-SPAN-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              'Dr. Herbert Dardik at Englewood Hospital and Medical Center in New Jersey. "The clock ticks," he said, "and I’ve become an advocate for evaluation.”',
            copyright: "Stephen Speranza for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/05SCI-SPAN/05SCI-SPAN-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              'Dr. Herbert Dardik at Englewood Hospital and Medical Center in New Jersey. "The clock ticks," he said, "and I’ve become an advocate for evaluation.”',
            copyright: "Stephen Speranza for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/05SCI-SPAN/05SCI-SPAN-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              'Dr. Herbert Dardik at Englewood Hospital and Medical Center in New Jersey. "The clock ticks," he said, "and I’ve become an advocate for evaluation.”',
            copyright: "Stephen Speranza for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/05SCI-SPAN/05SCI-SPAN-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              'Dr. Herbert Dardik at Englewood Hospital and Medical Center in New Jersey. "The clock ticks," he said, "and I’ve become an advocate for evaluation.”',
            copyright: "Stephen Speranza for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/05SCI-SPAN/merlin_149961180_9c96ad87-68b7-4bed-b7ba-6077652e18c9-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              'Dr. Herbert Dardik at Englewood Hospital and Medical Center in New Jersey. "The clock ticks," he said, "and I’ve become an advocate for evaluation.”',
            copyright: "Stephen Speranza for The New York Times"
          }
        ]
      },
      {
        section: "World",
        subsection: "Asia Pacific",
        title: "9 Tons of Pangolin Scales Are Seized in Hong Kong",
        abstract:
          "Officials believe the scales came from nearly 14,000 pangolins. All eight pangolin species are endangered, some critically.",
        url:
          "https://www.nytimes.com/2019/02/01/world/asia/pangolin-smuggling-hong-kong.html",
        byline: "By TIFFANY MAY",
        item_type: "Article",
        updated_date: "2019-02-01T09:58:10-05:00",
        created_date: "2019-02-01T08:26:16-05:00",
        published_date: "2019-02-01T08:26:16-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: ["Pangolins", "Smuggling", "Black Markets"],
        org_facet: ["WildAid"],
        per_facet: [],
        geo_facet: ["Hong Kong"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/world/02endangered-1/02endangered-1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Sacks of seized pangolin scales were displayed by Hong Kong customs officials on Friday, along with elephant tusks they said were found in the same shipment.",
            copyright: "Anthony Wallace/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/world/02endangered-1/02endangered-1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Sacks of seized pangolin scales were displayed by Hong Kong customs officials on Friday, along with elephant tusks they said were found in the same shipment.",
            copyright: "Anthony Wallace/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/world/02endangered-1/merlin_150039732_4bfa608f-96cc-46ea-8ce8-e221028b4ecd-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Sacks of seized pangolin scales were displayed by Hong Kong customs officials on Friday, along with elephant tusks they said were found in the same shipment.",
            copyright: "Anthony Wallace/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/world/02endangered-1/merlin_150039732_4bfa608f-96cc-46ea-8ce8-e221028b4ecd-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Sacks of seized pangolin scales were displayed by Hong Kong customs officials on Friday, along with elephant tusks they said were found in the same shipment.",
            copyright: "Anthony Wallace/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/world/02endangered-1/merlin_150039732_4bfa608f-96cc-46ea-8ce8-e221028b4ecd-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Sacks of seized pangolin scales were displayed by Hong Kong customs officials on Friday, along with elephant tusks they said were found in the same shipment.",
            copyright: "Anthony Wallace/Agence France-Presse — Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2DON5fq"
      },
      {
        section: "Climate",
        subsection: "",
        title:
          "Gigantic Cavity in Antarctica Glacier Is a Product of Rapid Melting, Study Finds",
        abstract:
          "Scientists discovered an underwater cavity with an area about two-thirds of Manhattan in the Thwaites Glacier. They say it’s a direct impact of climate change.",
        url:
          "https://www.nytimes.com/2019/02/01/climate/thwaites-glacier-antarctica-cavity.html",
        byline: "By JULIA JACOBS",
        item_type: "Article",
        updated_date: "2019-02-01T05:00:15-05:00",
        created_date: "2019-02-01T05:00:15-05:00",
        published_date: "2019-02-01T05:00:15-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: ["Ice", "Oceans and Seas", "Glaciers", "Global Warming"],
        org_facet: [
          "Jet Propulsion Laboratory",
          "National Aeronautics and Space Administration"
        ],
        per_facet: [],
        geo_facet: ["Antarctic Regions"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/climate/01xp-GLACIER/01xp-GLACIER-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "The Thwaites Glacier in western Antarctica is already responsible for about 4 percent of the world’s rising sea levels, according to NASA.",
            copyright: "Jim Yungel/NASA"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/climate/01xp-GLACIER/01xp-GLACIER-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "The Thwaites Glacier in western Antarctica is already responsible for about 4 percent of the world’s rising sea levels, according to NASA.",
            copyright: "Jim Yungel/NASA"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/climate/01xp-GLACIER/merlin_82651841_78e17011-0a6d-4869-be21-9ae39aafdddc-articleInline.jpg",
            format: "Normal",
            height: 107,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "The Thwaites Glacier in western Antarctica is already responsible for about 4 percent of the world’s rising sea levels, according to NASA.",
            copyright: "Jim Yungel/NASA"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/climate/01xp-GLACIER/01xp-GLACIER-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "The Thwaites Glacier in western Antarctica is already responsible for about 4 percent of the world’s rising sea levels, according to NASA.",
            copyright: "Jim Yungel/NASA"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/climate/01xp-GLACIER/merlin_82651841_78e17011-0a6d-4869-be21-9ae39aafdddc-superJumbo.jpg",
            format: "superJumbo",
            height: 1150,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "The Thwaites Glacier in western Antarctica is already responsible for about 4 percent of the world’s rising sea levels, according to NASA.",
            copyright: "Jim Yungel/NASA"
          }
        ],
        short_url: "https://nyti.ms/2DPxUmt"
      },
      {
        section: "Health",
        subsection: "",
        title:
          "Sackler Scion’s Email Reveals Push for High-Dose OxyContin, New Lawsuit Disclosures Claim",
        abstract:
          "Purdue Pharma tried to maximize profits by marketing the drug to keep patients on higher doses for longer periods, a lawsuit charges.",
        url:
          "https://www.nytimes.com/2019/01/31/health/opioids-purdue-pharma-sackler.html",
        byline: "By BARRY MEIER",
        item_type: "Article",
        updated_date: "2019-01-31T23:25:21-05:00",
        created_date: "2019-01-31T21:23:35-05:00",
        published_date: "2019-01-31T21:23:35-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Pain-Relieving Drugs",
          "Suits and Litigation (Civil)",
          "Drug Abuse and Traffic",
          "Addiction (Psychology)",
          "Opioids and Opiates",
          "OxyContin (Drug)",
          "Advertising and Marketing",
          "Drugs (Pharmaceuticals)"
        ],
        org_facet: ["Purdue Pharma"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01PURDUE/01PURDUE-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Demonstrators outside Purdue Pharma’s headquarters in Stamford, Conn., in August.",
            copyright: "Jessica Hill/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01PURDUE/01PURDUE-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Demonstrators outside Purdue Pharma’s headquarters in Stamford, Conn., in August.",
            copyright: "Jessica Hill/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01PURDUE/01PURDUE-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Demonstrators outside Purdue Pharma’s headquarters in Stamford, Conn., in August.",
            copyright: "Jessica Hill/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01PURDUE/01PURDUE-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Demonstrators outside Purdue Pharma’s headquarters in Stamford, Conn., in August.",
            copyright: "Jessica Hill/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01PURDUE/01PURDUE-superJumbo.jpg",
            format: "superJumbo",
            height: 1366,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Demonstrators outside Purdue Pharma’s headquarters in Stamford, Conn., in August.",
            copyright: "Jessica Hill/Associated Press"
          }
        ],
        short_url: "https://nyti.ms/2SdY5ev"
      },
      {
        section: "Reader Center",
        subsection: "",
        title:
          "It’s Still Cold. Our Midwest Readers Tell Us How to Make the Most of the Polar Vortex.",
        abstract:
          "Our readers found novel ways to entertain themselves in weather so cold, even the mail was not delivered.",
        url:
          "https://www.nytimes.com/2019/01/31/reader-center/what-to-do-during-polar-vortex.html",
        byline: "By LELA MOORE",
        item_type: "Article",
        updated_date: "2019-01-31T16:20:20-05:00",
        created_date: "2019-01-31T15:03:09-05:00",
        published_date: "2019-01-31T15:03:09-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: ["polar vortex", "Weather"],
        org_facet: [],
        per_facet: [],
        geo_facet: ["Midwestern States (US)"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/reader-center/31polarvortex-grid/31polarvortex-grid-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: ""
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/reader-center/31polarvortex-grid/31polarvortex-grid-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: ""
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/reader-center/31polarvortex-grid/31polarvortex-grid-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: ""
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/reader-center/31polarvortex-grid/31polarvortex-grid-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: ""
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/reader-center/31polarvortex-grid/31polarvortex-grid-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: ""
          }
        ],
        short_url: "https://nyti.ms/2Uq2l7Y"
      },
      {
        section: "Health",
        subsection: "",
        title: "He Swallowed a Toothpick. It Could Have Killed Him.",
        abstract:
          "For several weeks, a young athlete’s symptoms stumped doctors, despite tests and scans. Unnoticed in a sandwich or wrap, toothpicks can do a surprising amount of damage in the digestive tract, and beyond.",
        url: "https://www.nytimes.com/2019/01/30/health/toothpick-injury.html",
        byline: "By DENISE GRADY",
        item_type: "Article",
        updated_date: "2019-01-30T17:00:04-05:00",
        created_date: "2019-01-30T17:00:04-05:00",
        published_date: "2019-01-30T17:00:04-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Digestive Tract",
          "Infections",
          "Toothpicks",
          "Swallowing foreign objects",
          "your-feed-science"
        ],
        org_facet: [
          "Massachusetts General Hospital",
          "New England Journal of Medicine"
        ],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/science/31TOOTHPICK1/31TOOTHPICK1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Though not common, 136 injuries similar to this toothpick case study  have been reported in medical journals, and nearly 10 percent were fatal.",
            copyright: "Wavebreakmedia/iStock, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/science/31TOOTHPICK1/31TOOTHPICK1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Though not common, 136 injuries similar to this toothpick case study  have been reported in medical journals, and nearly 10 percent were fatal.",
            copyright: "Wavebreakmedia/iStock, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/science/31TOOTHPICK1/31TOOTHPICK1-articleInline.jpg",
            format: "Normal",
            height: 121,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Though not common, 136 injuries similar to this toothpick case study  have been reported in medical journals, and nearly 10 percent were fatal.",
            copyright: "Wavebreakmedia/iStock, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/science/31TOOTHPICK1/31TOOTHPICK1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Though not common, 136 injuries similar to this toothpick case study  have been reported in medical journals, and nearly 10 percent were fatal.",
            copyright: "Wavebreakmedia/iStock, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/science/31TOOTHPICK1/merlin_149984658_ba145bcb-675e-454e-bc8f-8c3c357eb070-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Though not common, 136 injuries similar to this toothpick case study  have been reported in medical journals, and nearly 10 percent were fatal.",
            copyright: "Wavebreakmedia/iStock, via Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2G9exGe"
      },
      {
        section: "Health",
        subsection: "",
        title:
          "E-Cigarettes Are Effective at Helping Smokers Quit, a Study Says",
        abstract:
          "A yearlong, randomized trial in England showed that e-cigarettes were almost twice as successful as products like patches or gum for smoking cessation.",
        url:
          "https://www.nytimes.com/2019/01/30/health/ecigarettes-nicotine-smoking-quit.html",
        byline: "By JAN HOFFMAN",
        item_type: "Article",
        updated_date: "2019-01-30T20:27:32-05:00",
        created_date: "2019-01-30T17:00:03-05:00",
        published_date: "2019-01-30T17:00:03-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "E-Cigarettes",
          "Smoking and Tobacco",
          "Nicotine",
          "Research",
          "Medicine and Health",
          "Clinical Trials"
        ],
        org_facet: ["New England Journal of Medicine"],
        per_facet: [],
        geo_facet: ["Great Britain"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/science/31ECIGS/31ECIGS-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "A study of English smokers found that e-cigarettes are nearly twice as effective as conventional nicotine replacement products like patches or gum, for quitting.",
            copyright: "Jeenah Moon for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/science/31ECIGS/31ECIGS-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "A study of English smokers found that e-cigarettes are nearly twice as effective as conventional nicotine replacement products like patches or gum, for quitting.",
            copyright: "Jeenah Moon for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/science/31ECIGS/31ECIGS-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "A study of English smokers found that e-cigarettes are nearly twice as effective as conventional nicotine replacement products like patches or gum, for quitting.",
            copyright: "Jeenah Moon for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/science/31ECIGS/31ECIGS-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "A study of English smokers found that e-cigarettes are nearly twice as effective as conventional nicotine replacement products like patches or gum, for quitting.",
            copyright: "Jeenah Moon for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/science/31ECIGS/31ECIGS-superJumbo.jpg",
            format: "superJumbo",
            height: 1366,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "A study of English smokers found that e-cigarettes are nearly twice as effective as conventional nicotine replacement products like patches or gum, for quitting.",
            copyright: "Jeenah Moon for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2SbxMpj"
      },
      {
        section: "U.S.",
        subsection: "",
        title:
          "Rubber and Wood in Chicken Nuggets: Why 120,000 Pounds Were Recalled",
        abstract:
          "Three separate recalls have been issued this month by Tyson Foods and Perdue. What’s happening to America’s chicken nuggets?",
        url:
          "https://www.nytimes.com/2019/01/30/us/tyson-chicken-nuggets-recall-dino.html",
        byline: "By SANDRA E. GARCIA",
        item_type: "Article",
        updated_date: "2019-01-31T08:53:15-05:00",
        created_date: "2019-01-30T16:38:50-05:00",
        published_date: "2019-01-30T16:38:50-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Poultry",
          "Food Contamination and Poisoning",
          "Recalls and Bans of Products",
          "Labeling and Labels (Product)"
        ],
        org_facet: [
          "Tyson Foods Inc",
          "Perdue Farms Inc",
          "Agriculture Department"
        ],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/us/politics/31xp-tyson/merlin_42457189_0bc630ab-4939-4939-8470-b2550ba096c1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Tyson Foods recalled more than 36,000 pounds of chicken nuggets this week because of possible rubber contamination.",
            copyright: "April L. Brown/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/us/politics/31xp-tyson/merlin_42457189_0bc630ab-4939-4939-8470-b2550ba096c1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Tyson Foods recalled more than 36,000 pounds of chicken nuggets this week because of possible rubber contamination.",
            copyright: "April L. Brown/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/us/politics/31xp-tyson/merlin_42457189_0bc630ab-4939-4939-8470-b2550ba096c1-articleInline.jpg",
            format: "Normal",
            height: 126,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Tyson Foods recalled more than 36,000 pounds of chicken nuggets this week because of possible rubber contamination.",
            copyright: "April L. Brown/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/us/politics/31xp-tyson/merlin_42457189_0bc630ab-4939-4939-8470-b2550ba096c1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Tyson Foods recalled more than 36,000 pounds of chicken nuggets this week because of possible rubber contamination.",
            copyright: "April L. Brown/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/us/politics/31xp-tyson/merlin_42457189_0bc630ab-4939-4939-8470-b2550ba096c1-superJumbo.jpg",
            format: "superJumbo",
            height: 1357,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Tyson Foods recalled more than 36,000 pounds of chicken nuggets this week because of possible rubber contamination.",
            copyright: "April L. Brown/Associated Press"
          }
        ],
        short_url: "https://nyti.ms/2Gc5lRr"
      },
      {
        section: "Climate",
        subsection: "",
        title:
          "Scientists Single Out a Suspect in Starfish Carnage: Warming Oceans",
        abstract:
          "A new study sheds light on a huge die-off of starfish along the Pacific Coast from Mexico to Alaska.",
        url:
          "https://www.nytimes.com/2019/01/30/climate/starfish-global-warming.html",
        byline: "By KENDRA PIERRE-LOUIS",
        item_type: "Article",
        updated_date: "2019-01-31T14:26:24-05:00",
        created_date: "2019-01-30T14:44:30-05:00",
        published_date: "2019-01-30T14:44:30-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Starfish",
          "Viruses",
          "Global Warming",
          "Environment",
          "Greenhouse Gas Emissions"
        ],
        org_facet: ["Science Advances (Journal)"],
        per_facet: ["Harvell, Drew"],
        geo_facet: ["Pacific Ocean"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/climate/31CLI-SEASTARS1/31CLI-SEASTARS1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "A sunflower star off Alaska. Their limbs can number between 16 and 24 and can span four feet across.",
            copyright: "Jennifer Idol/Stocktrek Images, via Science Source"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/climate/31CLI-SEASTARS1/31CLI-SEASTARS1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "A sunflower star off Alaska. Their limbs can number between 16 and 24 and can span four feet across.",
            copyright: "Jennifer Idol/Stocktrek Images, via Science Source"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/climate/31CLI-SEASTARS1/31CLI-SEASTARS1-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "A sunflower star off Alaska. Their limbs can number between 16 and 24 and can span four feet across.",
            copyright: "Jennifer Idol/Stocktrek Images, via Science Source"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/climate/31CLI-SEASTARS1/31CLI-SEASTARS1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "A sunflower star off Alaska. Their limbs can number between 16 and 24 and can span four feet across.",
            copyright: "Jennifer Idol/Stocktrek Images, via Science Source"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/climate/31CLI-SEASTARS1/31CLI-SEASTARS1-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "A sunflower star off Alaska. Their limbs can number between 16 and 24 and can span four feet across.",
            copyright: "Jennifer Idol/Stocktrek Images, via Science Source"
          }
        ],
        short_url: "https://nyti.ms/2Sehn3n"
      },
      {
        section: "Health",
        subsection: "",
        title:
          "Opioid Lawsuits Are Headed to Trial. Here's Why the Stakes Are Getting Uglier.",
        abstract:
          "The judge presiding over all the federal cases had hoped to settle them by now. But the behemoth litigation is only becoming more bloated, contentious and difficult to resolve.",
        url:
          "https://www.nytimes.com/2019/01/30/health/opioid-lawsuits-settlement-trial.html",
        byline: "By JAN HOFFMAN",
        item_type: "Article",
        updated_date: "2019-01-31T00:52:27-05:00",
        created_date: "2019-01-30T13:07:02-05:00",
        published_date: "2019-01-30T13:07:02-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Suits and Litigation (Civil)",
          "Opioids and Opiates",
          "Pain-Relieving Drugs",
          "Drug Abuse and Traffic",
          "Drugs (Pharmaceuticals)"
        ],
        org_facet: [],
        per_facet: ["Polster, Dan Aaron"],
        geo_facet: ["Ohio"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01OPIOID-COURTS-print/31OPIOID-COURTS1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Judge Dan Aaron Polster will preside over three consolidated lawsuits as a bellwether, or test case, in one of the most complicated legal battles in U.S. history.",
            copyright: "Maddie McGarvey for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01OPIOID-COURTS-print/31OPIOID-COURTS1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Judge Dan Aaron Polster will preside over three consolidated lawsuits as a bellwether, or test case, in one of the most complicated legal battles in U.S. history.",
            copyright: "Maddie McGarvey for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01OPIOID-COURTS-print/31OPIOID-COURTS1-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Judge Dan Aaron Polster will preside over three consolidated lawsuits as a bellwether, or test case, in one of the most complicated legal battles in U.S. history.",
            copyright: "Maddie McGarvey for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01OPIOID-COURTS-print/31OPIOID-COURTS1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Judge Dan Aaron Polster will preside over three consolidated lawsuits as a bellwether, or test case, in one of the most complicated legal battles in U.S. history.",
            copyright: "Maddie McGarvey for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/science/01OPIOID-COURTS-print/31OPIOID-COURTS1-superJumbo.jpg",
            format: "superJumbo",
            height: 1366,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Judge Dan Aaron Polster will preside over three consolidated lawsuits as a bellwether, or test case, in one of the most complicated legal battles in U.S. history.",
            copyright: "Maddie McGarvey for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2HE1zTe"
      },
      {
        section: "Health",
        subsection: "",
        title:
          "Searching for the Genetic Underpinnings of Morning Persons and Night Owls",
        abstract:
          "Researchers identified hundreds of gene variations that may be connected to when people go to bed.",
        url:
          "https://www.nytimes.com/2019/01/30/health/morning-person-genes.html",
        byline: "By VERONIQUE GREENWOOD",
        item_type: "Article",
        updated_date: "2019-01-31T06:13:18-05:00",
        created_date: "2019-01-30T09:12:16-05:00",
        published_date: "2019-01-30T09:12:16-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Sleep",
          "Genetics and Heredity",
          "Biorhythms",
          "Mental Health and Disorders",
          "your-feed-science"
        ],
        org_facet: ["Nature Communications (Journal)"],
        per_facet: ["Jones, Samuel E", "Weedon, Michael"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/31TB-SLEEPGENES/31TB-SLEEPGENES-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "A guard at a museum in Gdansk, Poland, is, like all of us, a slave to his chronotype.",
            copyright: "Omar Marques/SOPA Images/LightRocket, via Getty"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/31TB-SLEEPGENES/31TB-SLEEPGENES-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "A guard at a museum in Gdansk, Poland, is, like all of us, a slave to his chronotype.",
            copyright: "Omar Marques/SOPA Images/LightRocket, via Getty"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/31TB-SLEEPGENES/31TB-SLEEPGENES-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "A guard at a museum in Gdansk, Poland, is, like all of us, a slave to his chronotype.",
            copyright: "Omar Marques/SOPA Images/LightRocket, via Getty"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/31TB-SLEEPGENES/31TB-SLEEPGENES-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "A guard at a museum in Gdansk, Poland, is, like all of us, a slave to his chronotype.",
            copyright: "Omar Marques/SOPA Images/LightRocket, via Getty"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/science/31TB-SLEEPGENES/31TB-SLEEPGENES-superJumbo.jpg",
            format: "superJumbo",
            height: 1366,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "A guard at a museum in Gdansk, Poland, is, like all of us, a slave to his chronotype.",
            copyright: "Omar Marques/SOPA Images/LightRocket, via Getty"
          }
        ],
        short_url: "https://nyti.ms/2HOZPXk"
      },
      {
        section: "Climate",
        subsection: "",
        title:
          "U.S. Midwest Freezes, Australia Burns: This Is the Age of Weather Extremes",
        abstract:
          "Numbing cold hit parts of the United States as wildfires raged in Australia’s record-breaking heat. Here's the climate change connection.",
        url:
          "https://www.nytimes.com/2019/01/29/climate/global-warming-extreme-weather.html",
        byline: "By SOMINI SENGUPTA",
        item_type: "Article",
        updated_date: "2019-01-30T11:03:05-05:00",
        created_date: "2019-01-29T19:22:38-05:00",
        published_date: "2019-01-29T19:22:38-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Global Warming",
          "Greenhouse Gas Emissions",
          "Carbon Dioxide",
          "Wildfires",
          "Weather",
          "Drought"
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: ["Australia", "Midwestern States (US)"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/climate/31CLI-EXTREMES1/31CLI-EXTREMES1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "The Lake Michigan shore in Chicago on Tuesday. Overnight temperatures in the city dipped to minus 21 degrees Fahrenheit, or minus 29 Celsius, near the record low.",
            copyright: "Joshua Lott for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/climate/31CLI-EXTREMES1/31CLI-EXTREMES1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "The Lake Michigan shore in Chicago on Tuesday. Overnight temperatures in the city dipped to minus 21 degrees Fahrenheit, or minus 29 Celsius, near the record low.",
            copyright: "Joshua Lott for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/climate/31CLI-EXTREMES1/31CLI-EXTREMES1-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "The Lake Michigan shore in Chicago on Tuesday. Overnight temperatures in the city dipped to minus 21 degrees Fahrenheit, or minus 29 Celsius, near the record low.",
            copyright: "Joshua Lott for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/climate/31CLI-EXTREMES1/31CLI-EXTREMES1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "The Lake Michigan shore in Chicago on Tuesday. Overnight temperatures in the city dipped to minus 21 degrees Fahrenheit, or minus 29 Celsius, near the record low.",
            copyright: "Joshua Lott for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/climate/31CLI-EXTREMES1/merlin_149945727_12b33328-4941-48fa-b4c6-4a3dd1dba079-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "The Lake Michigan shore in Chicago on Tuesday. Overnight temperatures in the city dipped to minus 21 degrees Fahrenheit, or minus 29 Celsius, near the record low.",
            copyright: "Joshua Lott for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2SgWCnI"
      },
      {
        section: "Health",
        subsection: "",
        title: "How to Avoid Frostbite and Hypothermia in Extreme Cold Weather",
        abstract:
          "During extreme cold, the blood rushes to the center of the body to protect vital organs, and the body temperature can fall to dangerous lows. The best advice is to stay inside, experts say.",
        url:
          "https://www.nytimes.com/2019/01/29/health/frostbite-hypothermia-cold-weather.html",
        byline: "By KAREN ZRAICK",
        item_type: "Article",
        updated_date: "2019-01-30T11:56:08-05:00",
        created_date: "2019-01-29T17:57:19-05:00",
        published_date: "2019-01-29T17:57:19-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: ["Weather", "Hypothermia", "Frostbite"],
        org_facet: [],
        per_facet: [],
        geo_facet: ["Midwestern States (US)"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/us/30xp-Frostbite1-sub/merlin_149945814_2f8c2097-50f5-47c4-bcbf-1c28cb381663-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Morning commuters on Adams Street in Chicago on Tuesday. Forecasters warned that the frigid weather will worsen, and could be life-threatening.",
            copyright: "Joshua Lott for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/us/30xp-Frostbite1-sub/merlin_149945814_2f8c2097-50f5-47c4-bcbf-1c28cb381663-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Morning commuters on Adams Street in Chicago on Tuesday. Forecasters warned that the frigid weather will worsen, and could be life-threatening.",
            copyright: "Joshua Lott for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/us/30xp-Frostbite1-sub/merlin_149945814_2f8c2097-50f5-47c4-bcbf-1c28cb381663-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Morning commuters on Adams Street in Chicago on Tuesday. Forecasters warned that the frigid weather will worsen, and could be life-threatening.",
            copyright: "Joshua Lott for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/us/30xp-Frostbite1-sub/merlin_149945814_2f8c2097-50f5-47c4-bcbf-1c28cb381663-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Morning commuters on Adams Street in Chicago on Tuesday. Forecasters warned that the frigid weather will worsen, and could be life-threatening.",
            copyright: "Joshua Lott for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/us/30xp-Frostbite1-sub/merlin_149945814_2f8c2097-50f5-47c4-bcbf-1c28cb381663-superJumbo.jpg",
            format: "superJumbo",
            height: 1371,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Morning commuters on Adams Street in Chicago on Tuesday. Forecasters warned that the frigid weather will worsen, and could be life-threatening.",
            copyright: "Joshua Lott for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2HFiaGi"
      },
      {
        section: "Climate",
        subsection: "",
        title:
          "China’s Coal Plants Haven’t Cut Methane Emissions as Required, Study Finds",
        abstract:
          "China in 2010 promised to curb methane emissions. In the first five years, it failed to keep its promise, according to new research based on satellite data.",
        url:
          "https://www.nytimes.com/2019/01/29/climate/china-coal-climate-change.html",
        byline: "By SOMINI SENGUPTA",
        item_type: "Article",
        updated_date: "2019-01-31T10:38:01-05:00",
        created_date: "2019-01-29T12:57:33-05:00",
        published_date: "2019-01-29T12:57:33-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Coal",
          "Methane",
          "Global Warming",
          "Greenhouse Gas Emissions"
        ],
        org_facet: ["Nature Communications (Journal)"],
        per_facet: ["Miller, Scot M"],
        geo_facet: ["China"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/climate/30CLI-CHINACOAL1/30CLI-CHINACOAL1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "A coal-fired power plant in Zouping, Shandong Province, China.",
            copyright: "Giulia Marchi for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/climate/30CLI-CHINACOAL1/30CLI-CHINACOAL1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "A coal-fired power plant in Zouping, Shandong Province, China.",
            copyright: "Giulia Marchi for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/climate/30CLI-CHINACOAL1/30CLI-CHINACOAL1-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "A coal-fired power plant in Zouping, Shandong Province, China.",
            copyright: "Giulia Marchi for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/climate/30CLI-CHINACOAL1/30CLI-CHINACOAL1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "A coal-fired power plant in Zouping, Shandong Province, China.",
            copyright: "Giulia Marchi for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/climate/30CLI-CHINACOAL1/merlin_135419241_b090141f-7f4f-4e8f-8f65-2bccbd4fd465-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "A coal-fired power plant in Zouping, Shandong Province, China.",
            copyright: "Giulia Marchi for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2HEIZdU"
      },
      {
        section: "U.S.",
        subsection: "",
        title:
          "Joshua Trees Destroyed in National Park During Shutdown May Take Centuries to Regrow",
        abstract:
          "A small number of thousands of signature trees in Joshua Tree National Park were destroyed during the shutdown. Conservationists said replacing them will take time.",
        url: "https://www.nytimes.com/2019/01/29/us/joshua-tree-shutdown.html",
        byline: "By LIAM STACK",
        item_type: "Article",
        updated_date: "2019-01-29T05:00:06-05:00",
        created_date: "2019-01-29T05:00:06-05:00",
        published_date: "2019-01-29T05:00:06-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "National Parks, Monuments and Seashores",
          "Shutdowns (Institutional)",
          "Conservation of Resources",
          "Vandalism"
        ],
        org_facet: ["National Park Service"],
        per_facet: [],
        geo_facet: ["Joshua Tree National Park (Calif)"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/us/29xp-joshuatree1/29xp-joshuatree1-thumbStandard-v2.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "With most of the park&rsquo;s rangers furloughed, vandals and inconsiderate guests ran amok. A small number of the park&rsquo;s namesake trees were outright destroyed. Replacing them may take centuries, according to conservationists.",
            copyright: "Jae C. Hong/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/us/29xp-joshuatree1/29xp-joshuatree1-thumbLarge-v2.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "With most of the park&rsquo;s rangers furloughed, vandals and inconsiderate guests ran amok. A small number of the park&rsquo;s namesake trees were outright destroyed. Replacing them may take centuries, according to conservationists.",
            copyright: "Jae C. Hong/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/us/29xp-joshuatree1/29xp-joshuatree1-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "With most of the park&rsquo;s rangers furloughed, vandals and inconsiderate guests ran amok. A small number of the park&rsquo;s namesake trees were outright destroyed. Replacing them may take centuries, according to conservationists.",
            copyright: "Jae C. Hong/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/us/29xp-joshuatree1/29xp-joshuatree1-mediumThreeByTwo210-v2.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "With most of the park&rsquo;s rangers furloughed, vandals and inconsiderate guests ran amok. A small number of the park&rsquo;s namesake trees were outright destroyed. Replacing them may take centuries, according to conservationists.",
            copyright: "Jae C. Hong/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/05/us/29xp-joshuatree1/29xp-joshuatree1-superJumbo.jpg",
            format: "superJumbo",
            height: 1366,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "With most of the park&rsquo;s rangers furloughed, vandals and inconsiderate guests ran amok. A small number of the park&rsquo;s namesake trees were outright destroyed. Replacing them may take centuries, according to conservationists.",
            copyright: "Jae C. Hong/Associated Press"
          }
        ],
        short_url: "https://nyti.ms/2HDL3CY"
      },
      {
        section: "Health",
        subsection: "",
        title:
          "Which Allergens Are in Your Food? You Can’t Always Tell From the Labels",
        abstract:
          "Despite federal legislation passed 15 years ago, food labels don’t always alert consumers to allergens that may be present in packaged goods.",
        url:
          "https://www.nytimes.com/2019/01/28/health/food-allergies-children-labeling.html",
        byline: "By ERIC ATHAS",
        item_type: "Article",
        updated_date: "2019-01-28T13:44:45-05:00",
        created_date: "2019-01-28T13:44:45-05:00",
        published_date: "2019-01-28T13:44:45-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Labeling and Labels (Product)",
          "Allergies",
          "Food",
          "Nuts",
          "Anaphylactic Shock",
          "Law and Legislation",
          "Consumer Protection",
          "Children and Childhood",
          "Peanuts",
          "Supermarkets and Grocery Stores",
          "your-feed-science"
        ],
        org_facet: ["Food and Drug Administration"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-ALLERGENS/29SCI-ALLERGENS-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "A shopping cart filled with groceries in Brooklyn.",
            copyright: "Demetrius Freeman for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-ALLERGENS/29SCI-ALLERGENS-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "A shopping cart filled with groceries in Brooklyn.",
            copyright: "Demetrius Freeman for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-ALLERGENS/merlin_147053049_da275b17-f2ea-477b-8a66-921f054c855a-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "A shopping cart filled with groceries in Brooklyn.",
            copyright: "Demetrius Freeman for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-ALLERGENS/29SCI-ALLERGENS-mediumThreeByTwo210-v2.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "A shopping cart filled with groceries in Brooklyn.",
            copyright: "Demetrius Freeman for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-ALLERGENS/merlin_147053049_da275b17-f2ea-477b-8a66-921f054c855a-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption: "A shopping cart filled with groceries in Brooklyn.",
            copyright: "Demetrius Freeman for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2Sb0CpG"
      },
      {
        section: "Health",
        subsection: "",
        title: "Why It Hurts to Lose Sleep",
        abstract:
          "Sleep deprivation can make your physical aches more painful. A new study begins to explain how that happens.",
        url:
          "https://www.nytimes.com/2019/01/28/health/sleep-pain-research.html",
        byline: "By BENEDICT CAREY",
        item_type: "Article",
        updated_date: "2019-01-28T13:13:03-05:00",
        created_date: "2019-01-28T13:13:03-05:00",
        published_date: "2019-01-28T13:13:03-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: ["Sleep", "Brain", "Pain", "Research"],
        org_facet: ["University of California, Berkeley"],
        per_facet: ["Krause, Adam J", "Walker, Matthew P"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-SLEEP/29SCI-SLEEP-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "A subject in a sleep-disorder clinic in France. Recent research found that staying awake all night can increase a person's sensitivity to pain the next morning by as much as 30 percent.",
            copyright: "BSIP/UIG, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-SLEEP/29SCI-SLEEP-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "A subject in a sleep-disorder clinic in France. Recent research found that staying awake all night can increase a person's sensitivity to pain the next morning by as much as 30 percent.",
            copyright: "BSIP/UIG, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-SLEEP/merlin_149750739_bb597aca-f9cb-4074-b741-dc9d498349fd-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "A subject in a sleep-disorder clinic in France. Recent research found that staying awake all night can increase a person's sensitivity to pain the next morning by as much as 30 percent.",
            copyright: "BSIP/UIG, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-SLEEP/29SCI-SLEEP-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "A subject in a sleep-disorder clinic in France. Recent research found that staying awake all night can increase a person's sensitivity to pain the next morning by as much as 30 percent.",
            copyright: "BSIP/UIG, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-SLEEP/merlin_149750739_bb597aca-f9cb-4074-b741-dc9d498349fd-superJumbo.jpg",
            format: "superJumbo",
            height: 1367,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "A subject in a sleep-disorder clinic in France. Recent research found that staying awake all night can increase a person's sensitivity to pain the next morning by as much as 30 percent.",
            copyright: "BSIP/UIG, via Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2HEHufI"
      },
      {
        section: "Health",
        subsection: "",
        title:
          "Study Offers Hint of Hope for Staving Off Dementia in Some People",
        abstract:
          "People who received intensive treatment for hypertension were less likely to develop minor cognitive problems than those receiving standard treatment.",
        url:
          "https://www.nytimes.com/2019/01/28/health/dementia-blood-pressure-cognitive-impairment.html",
        byline: "By PAM BELLUCK",
        item_type: "Article",
        updated_date: "2019-01-28T11:00:04-05:00",
        created_date: "2019-01-28T11:00:04-05:00",
        published_date: "2019-01-28T11:00:04-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Alzheimer's Disease",
          "Blood Pressure",
          "Dementia",
          "Elderly",
          "Research",
          "Hypertension",
          "Memory"
        ],
        org_facet: ["Alzheimer's Assn", "Journal of the American Medical Assn"],
        per_facet: ["Williamson, Jeff D"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29dementia-01/29dementia-01-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Coloured positron emission tomography (PET, centre) and computed tomography (CT, left) scans of the brain of a 62-year-old woman with Alzheimer’s disease.",
            copyright: "Zephyr/Science Source"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29dementia-01/29dementia-01-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Coloured positron emission tomography (PET, centre) and computed tomography (CT, left) scans of the brain of a 62-year-old woman with Alzheimer’s disease.",
            copyright: "Zephyr/Science Source"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29dementia-01/merlin_149901411_5bef4051-7dae-4b81-ac32-a5254fc9a46c-articleInline.jpg",
            format: "Normal",
            height: 163,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Coloured positron emission tomography (PET, centre) and computed tomography (CT, left) scans of the brain of a 62-year-old woman with Alzheimer’s disease.",
            copyright: "Zephyr/Science Source"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29dementia-01/29dementia-01-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Coloured positron emission tomography (PET, centre) and computed tomography (CT, left) scans of the brain of a 62-year-old woman with Alzheimer’s disease.",
            copyright: "Zephyr/Science Source"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29dementia-01/merlin_149901411_5bef4051-7dae-4b81-ac32-a5254fc9a46c-superJumbo.jpg",
            format: "superJumbo",
            height: 1758,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Coloured positron emission tomography (PET, centre) and computed tomography (CT, left) scans of the brain of a 62-year-old woman with Alzheimer’s disease.",
            copyright: "Zephyr/Science Source"
          }
        ],
        short_url: "https://nyti.ms/2SajUeR"
      },
      {
        section: "Health",
        subsection: "",
        title: "Caroline Elton Helps Doctors Heal Themselves",
        abstract:
          "The psychologist counsels doctors who are suffering even as they tend to the needs of others.",
        url:
          "https://www.nytimes.com/2019/01/28/health/caroline-elton-helps-doctors-heal-themselves.html",
        byline: "By CLAUDIA DREIFUS",
        item_type: "Article",
        updated_date: "2019-01-28T10:28:16-05:00",
        created_date: "2019-01-28T10:28:16-05:00",
        published_date: "2019-01-28T10:28:16-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Psychology and Psychologists",
          "Doctors",
          "Depression (Mental)",
          "Mental Health and Disorders",
          "Labor and Jobs",
          "Also Human: The Inner Lives of Doctors (Book)",
          "your-feed-science"
        ],
        org_facet: [],
        per_facet: ["Elton, Caroline"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-CONVERSATION-02/29SCI-CONVERSATION-02-thumbStandard-v2.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              'Caroline Elton, at her home in London. "Doctors are not supposed to get sick," she said.',
            copyright: "Tom Jamieson for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-CONVERSATION-02/29SCI-CONVERSATION-02-thumbLarge-v2.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              'Caroline Elton, at her home in London. "Doctors are not supposed to get sick," she said.',
            copyright: "Tom Jamieson for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-CONVERSATION-02/merlin_149789889_3f2fda08-61e2-48b8-a056-ecaf1ce3bb26-articleInline.jpg",
            format: "Normal",
            height: 253,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              'Caroline Elton, at her home in London. "Doctors are not supposed to get sick," she said.',
            copyright: "Tom Jamieson for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-CONVERSATION-02/29SCI-CONVERSATION-02-mediumThreeByTwo210-v3.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              'Caroline Elton, at her home in London. "Doctors are not supposed to get sick," she said.',
            copyright: "Tom Jamieson for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/science/29SCI-CONVERSATION-02/merlin_149789889_3f2fda08-61e2-48b8-a056-ecaf1ce3bb26-superJumbo.jpg",
            format: "superJumbo",
            height: 2048,
            width: 1537,
            type: "image",
            subtype: "photo",
            caption:
              'Caroline Elton, at her home in London. "Doctors are not supposed to get sick," she said.',
            copyright: "Tom Jamieson for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2SfijUU"
      }
    ]
  },
  {
    status: "OK",
    copyright:
      "Copyright (c) 2019 The New York Times Company. All Rights Reserved.",
    section: "technology",
    last_updated: "2019-02-04T04:47:05-05:00",
    num_results: 39,
    results: [
      {
        section: "Technology",
        subsection: "",
        title: "Apple Shows Facebook Who Has the Power in an App Dispute",
        abstract:
          "After two days of disruptions, the iPhone maker restored the social network’s access to internal apps that its employees rely on in their jobs.",
        url:
          "https://www.nytimes.com/2019/01/31/technology/apple-blocks-facebook.html",
        byline: "By MIKE ISAAC",
        item_type: "Article",
        updated_date: "2019-01-31T19:55:58-05:00",
        created_date: "2019-01-31T19:55:58-05:00",
        published_date: "2019-01-31T19:55:58-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Mobile Applications",
          "Social Media",
          "Privacy",
          "Data-Mining and Database Marketing",
          "iPhone"
        ],
        org_facet: ["Apple Inc", "Facebook Inc"],
        per_facet: ["Cook, Timothy D", "Zuckerberg, Mark E"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/us/01facebookapple-1-print/merlin_146095647_8fc65392-e84f-49a6-899f-7da15641ff3e-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Timothy D. Cook, the chief executive of Apple, which said Facebook had broken its rules by publicly distributing a research app that was approved only for internal use.",
            copyright: "Shannon Stapleton/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/us/01facebookapple-1-print/merlin_146095647_8fc65392-e84f-49a6-899f-7da15641ff3e-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Timothy D. Cook, the chief executive of Apple, which said Facebook had broken its rules by publicly distributing a research app that was approved only for internal use.",
            copyright: "Shannon Stapleton/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/us/01facebookapple-1-print/merlin_146095647_8fc65392-e84f-49a6-899f-7da15641ff3e-articleInline.jpg",
            format: "Normal",
            height: 119,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Timothy D. Cook, the chief executive of Apple, which said Facebook had broken its rules by publicly distributing a research app that was approved only for internal use.",
            copyright: "Shannon Stapleton/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/us/01facebookapple-1-print/merlin_146095647_8fc65392-e84f-49a6-899f-7da15641ff3e-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Timothy D. Cook, the chief executive of Apple, which said Facebook had broken its rules by publicly distributing a research app that was approved only for internal use.",
            copyright: "Shannon Stapleton/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/us/01facebookapple-1-print/merlin_146095647_8fc65392-e84f-49a6-899f-7da15641ff3e-superJumbo.jpg",
            format: "superJumbo",
            height: 1277,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Timothy D. Cook, the chief executive of Apple, which said Facebook had broken its rules by publicly distributing a research app that was approved only for internal use.",
            copyright: "Shannon Stapleton/Reuters"
          }
        ],
        short_url: "https://nyti.ms/2SkA1qm"
      },
      {
        section: "Technology",
        subsection: "",
        title:
          "Russia’s Playbook for Social Media Disinformation Has Gone Global",
        abstract:
          "Facebook and Twitter said on Thursday that disinformation on their platforms now comes from more domestic and foreign sources — and not just Russia.",
        url:
          "https://www.nytimes.com/2019/01/31/technology/twitter-disinformation-united-states-russia.html",
        byline: "By SHEERA FRENKEL, KATE CONGER and KEVIN ROOSE",
        item_type: "Article",
        updated_date: "2019-01-31T19:54:33-05:00",
        created_date: "2019-01-31T15:29:14-05:00",
        published_date: "2019-01-31T15:29:14-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Russian Interference in 2016 US Elections and Ties to Trump Associates",
          "Cyberwarfare and Defense",
          "Rumors and Misinformation",
          "Politics and Government",
          "Social Media",
          "Elections"
        ],
        org_facet: ["Twitter", "Facebook Inc"],
        per_facet: [],
        geo_facet: ["Russia"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01twitter-01/01twitter-01-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Twitter said on Thursday that more disinformation was coming from within the United States.",
            copyright: "Jaap Arriens/NurPhoto, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01twitter-01/01twitter-01-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Twitter said on Thursday that more disinformation was coming from within the United States.",
            copyright: "Jaap Arriens/NurPhoto, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01twitter-01/merlin_150020769_f863a3c6-f99a-41f1-b544-d237657aeb29-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Twitter said on Thursday that more disinformation was coming from within the United States.",
            copyright: "Jaap Arriens/NurPhoto, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01twitter-01/merlin_150020769_f863a3c6-f99a-41f1-b544-d237657aeb29-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Twitter said on Thursday that more disinformation was coming from within the United States.",
            copyright: "Jaap Arriens/NurPhoto, via Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01twitter-01/merlin_150020769_f863a3c6-f99a-41f1-b544-d237657aeb29-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Twitter said on Thursday that more disinformation was coming from within the United States.",
            copyright: "Jaap Arriens/NurPhoto, via Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2Uwr36y"
      },
      {
        section: "Technology",
        subsection: "",
        title: "Net Neutrality Repeal at Stake as Key Court Case Starts",
        abstract:
          "A lawsuit challenging the Federal Communications Commission’s repeal of rules meant to ensure internet users open access to all websites and services is one of several fronts in a broader battle.",
        url:
          "https://www.nytimes.com/2019/02/01/technology/net-neutrality-repeal-case.html",
        byline: "By CECILIA KANG",
        item_type: "Article",
        updated_date: "2019-02-01T15:06:48-05:00",
        created_date: "2019-02-01T09:48:03-05:00",
        published_date: "2019-02-01T09:48:03-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Law and Legislation",
          "Net Neutrality",
          "Computers and the Internet",
          "United States Politics and Government",
          "Regulation and Deregulation of Industry"
        ],
        org_facet: ["Federal Communications Commission"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02netneutrality/02netneutrality-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Ajit Pai, the chairman of the Federal Communications Commission, supported the rolling back of regulations adopted under the Obama administration.",
            copyright: "Mark Wilson/Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02netneutrality/02netneutrality-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Ajit Pai, the chairman of the Federal Communications Commission, supported the rolling back of regulations adopted under the Obama administration.",
            copyright: "Mark Wilson/Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02netneutrality/merlin_144668283_8511e234-ed6a-4146-8af4-75ef7dfc2d31-articleInline.jpg",
            format: "Normal",
            height: 140,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Ajit Pai, the chairman of the Federal Communications Commission, supported the rolling back of regulations adopted under the Obama administration.",
            copyright: "Mark Wilson/Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02netneutrality/02netneutrality-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Ajit Pai, the chairman of the Federal Communications Commission, supported the rolling back of regulations adopted under the Obama administration.",
            copyright: "Mark Wilson/Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02netneutrality/merlin_144668283_8511e234-ed6a-4146-8af4-75ef7dfc2d31-superJumbo.jpg",
            format: "superJumbo",
            height: 1513,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Ajit Pai, the chairman of the Federal Communications Commission, supported the rolling back of regulations adopted under the Obama administration.",
            copyright: "Mark Wilson/Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2DQhj1P"
      },
      {
        section: "Technology",
        subsection: "",
        title: "Apple Says It Has Fixed FaceTime Security Bug",
        abstract:
          "A software update will be released next week for owners of iPhones, iPads and Mac computers, the company said.",
        url:
          "https://www.nytimes.com/2019/02/01/technology/facetime-bug-fixed.html",
        byline: "By JACK NICAS and BRIAN X. CHEN",
        item_type: "Article",
        updated_date: "2019-02-01T14:18:00-05:00",
        created_date: "2019-02-01T09:47:27-05:00",
        published_date: "2019-02-01T09:47:27-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Mobile Applications",
          "Software",
          "Computer Security",
          "Defective Products",
          "iPhone",
          "Privacy",
          "Cyberattacks and Hackers"
        ],
        org_facet: ["Apple Inc"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02APPLEBUG/02APPLEBUG-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "The logo of FaceTime is pictured on an iPhone screen in Berlin on January 29, 2019. - A newly discovered FaceTime bug lets people hear and even see those they are reaching out to on iPhones using the video calling software, sparking privacy fears.",
            copyright: "Odd Andersen/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02APPLEBUG/02APPLEBUG-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "The logo of FaceTime is pictured on an iPhone screen in Berlin on January 29, 2019. - A newly discovered FaceTime bug lets people hear and even see those they are reaching out to on iPhones using the video calling software, sparking privacy fears.",
            copyright: "Odd Andersen/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02APPLEBUG/02APPLEBUG-articleInline.jpg",
            format: "Normal",
            height: 128,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "The logo of FaceTime is pictured on an iPhone screen in Berlin on January 29, 2019. - A newly discovered FaceTime bug lets people hear and even see those they are reaching out to on iPhones using the video calling software, sparking privacy fears.",
            copyright: "Odd Andersen/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02APPLEBUG/02APPLEBUG-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "The logo of FaceTime is pictured on an iPhone screen in Berlin on January 29, 2019. - A newly discovered FaceTime bug lets people hear and even see those they are reaching out to on iPhones using the video calling software, sparking privacy fears.",
            copyright: "Odd Andersen/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02APPLEBUG/02APPLEBUG-superJumbo.jpg",
            format: "superJumbo",
            height: 1377,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "The logo of FaceTime is pictured on an iPhone screen in Berlin on January 29, 2019. - A newly discovered FaceTime bug lets people hear and even see those they are reaching out to on iPhones using the video calling software, sparking privacy fears.",
            copyright: "Odd Andersen/Agence France-Presse — Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2UyP6ln"
      },
      {
        section: "Style",
        subsection: "",
        title: "Meet the Creator of the Egg That Broke Instagram",
        abstract: "He works in advertising.",
        url:
          "https://www.nytimes.com/2019/02/03/style/world-record-egg-instagram.html",
        byline: "By JONAH ENGEL BROMWICH and SAPNA MAHESHWARI",
        item_type: "Article",
        updated_date: "2019-02-03T23:10:01-05:00",
        created_date: "2019-02-03T23:10:01-05:00",
        published_date: "2019-02-03T23:10:01-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Online Advertising",
          "Advertising and Marketing",
          "Eggs",
          "Super Bowl",
          "Social Media",
          "Mental Health and Disorders"
        ],
        org_facet: ["Instagram Inc"],
        per_facet: ["Godfrey, Chris"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/15/world/15xp-egg-promo/15xp-egg-promo-thumbStandard-v2.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "This egg's name is Eugene.",
            copyright: ""
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/15/world/15xp-egg-promo/15xp-egg-promo-thumbLarge-v2.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "This egg's name is Eugene.",
            copyright: ""
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/15/world/15xp-egg-promo/15xp-egg-promo-articleInline-v2.jpg",
            format: "Normal",
            height: 192,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "This egg's name is Eugene.",
            copyright: ""
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/15/world/15xp-egg-promo/15xp-egg-promo-mediumThreeByTwo210-v3.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "This egg's name is Eugene.",
            copyright: ""
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/15/world/15xp-egg-promo/15xp-egg-promo-superJumbo-v2.jpg",
            format: "superJumbo",
            height: 1168,
            width: 1157,
            type: "image",
            subtype: "photo",
            caption: "This egg's name is Eugene.",
            copyright: ""
          }
        ],
        short_url: "https://nyti.ms/2UGiYwt"
      },
      {
        section: "Business",
        subsection: "DealBook",
        title: "Big Tech Is No Longer Carrying the Stock Market",
        abstract:
          "The largest tech companies aren’t driving the performance of the market, and that shift doesn’t bode well for a march to new highs.",
        url:
          "https://www.nytimes.com/2019/02/03/business/dealbook/stock-market-technology.html",
        byline: "By STEPHEN GROCER",
        item_type: "Article",
        updated_date: "2019-02-03T23:12:23-05:00",
        created_date: "2019-02-03T15:15:50-05:00",
        published_date: "2019-02-03T15:15:50-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "United States Economy",
          "Stocks and Bonds",
          "Standard & Poor's 500-Stock Index",
          "International Trade and World Market"
        ],
        org_facet: [
          "Amazon.com Inc",
          "Apple Inc",
          "Facebook Inc",
          "Netflix Inc"
        ],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/dealbook/02db-techstocks1/02db-techstocks1-thumbStandard.png",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: ""
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/dealbook/02db-techstocks1/02db-techstocks1-thumbLarge.png",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: ""
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/dealbook/02db-techstocks1/02db-techstocks1-articleInline.png",
            format: "Normal",
            height: 147,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: ""
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/dealbook/02db-techstocks1/02db-techstocks1-mediumThreeByTwo210.png",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: ""
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/dealbook/02db-techstocks1/02db-techstocks1-superJumbo.png",
            format: "superJumbo",
            height: 1303,
            width: 1679,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: ""
          }
        ],
        short_url: "https://nyti.ms/2UDfuum"
      },
      {
        section: "Technology",
        subsection: "",
        title: "Behind Tech’s Shine, Some Warnings Signs Appear",
        abstract:
          "From Apple to Nvidia, tech companies say business is slowing. Among the reasons: China and a Bitcoin slump. It may be just a bump — until it’s not.",
        url:
          "https://www.nytimes.com/2019/02/03/technology/tech-warning-signs.html",
        byline: "By DAVID STREITFELD and DON CLARK",
        item_type: "Article",
        updated_date: "2019-02-03T22:58:35-05:00",
        created_date: "2019-02-03T15:06:37-05:00",
        published_date: "2019-02-03T15:06:37-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Computer Chips",
          "Computers and the Internet",
          "Smartphones",
          "Company Reports",
          "Cloud Computing",
          "Bitcoin (Currency)",
          "Data Centers"
        ],
        org_facet: [
          "Apple Inc",
          "NVIDIA Corporation",
          "Intel Corporation",
          "Micron Technology Inc"
        ],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04Techwarnings-illo/merlin_150069981_262b138e-da89-425b-ab25-c9442eaab0ca-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "John Hersey"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04Techwarnings-illo/merlin_150069981_262b138e-da89-425b-ab25-c9442eaab0ca-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "John Hersey"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04Techwarnings-illo/merlin_150069981_262b138e-da89-425b-ab25-c9442eaab0ca-articleInline.jpg",
            format: "Normal",
            height: 143,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "John Hersey"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04Techwarnings-illo/04Techwarnings-illo-mediumThreeByTwo210-v2.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "John Hersey"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04Techwarnings-illo/merlin_150069981_262b138e-da89-425b-ab25-c9442eaab0ca-superJumbo.jpg",
            format: "superJumbo",
            height: 1544,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "John Hersey"
          }
        ],
        short_url: "https://nyti.ms/2DSpfzx"
      },
      {
        section: "Travel",
        subsection: "",
        title: "Apps and Services to Help You Get Around on Your Next Trip",
        abstract:
          "Whether you’re traveling abroad or just away from home, these apps and services can help you get from the airport or hotel to the places you actually want to see.",
        url:
          "https://www.nytimes.com/2019/02/02/travel/apps-and-services-to-help-you-get-around-on-your-next-trip.html",
        byline: "By SARAH AMANDOLARE",
        item_type: "Article",
        updated_date: "2019-02-02T05:00:00-05:00",
        created_date: "2019-02-02T05:00:00-05:00",
        published_date: "2019-02-02T05:00:00-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Transit Systems",
          "Travel and Vacations",
          "Car Services and Livery Cabs",
          "Taxicabs and Taxicab Drivers"
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/travel/03trending-travelapps1/merlin_148701162_a8592c57-91a2-4089-b1c5-ee18f076a3be-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Getting to your destination is only part of the process. Getting where you need to go once you arrive is the next challenge, and these apps want to help.",
            copyright: "Wu Hong/EPA, via Shutterstock"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/travel/03trending-travelapps1/merlin_148701162_a8592c57-91a2-4089-b1c5-ee18f076a3be-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Getting to your destination is only part of the process. Getting where you need to go once you arrive is the next challenge, and these apps want to help.",
            copyright: "Wu Hong/EPA, via Shutterstock"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/travel/03trending-travelapps1/merlin_148701162_a8592c57-91a2-4089-b1c5-ee18f076a3be-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Getting to your destination is only part of the process. Getting where you need to go once you arrive is the next challenge, and these apps want to help.",
            copyright: "Wu Hong/EPA, via Shutterstock"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/travel/03trending-travelapps1/merlin_148701162_a8592c57-91a2-4089-b1c5-ee18f076a3be-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Getting to your destination is only part of the process. Getting where you need to go once you arrive is the next challenge, and these apps want to help.",
            copyright: "Wu Hong/EPA, via Shutterstock"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/travel/03trending-travelapps1/merlin_148701162_a8592c57-91a2-4089-b1c5-ee18f076a3be-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Getting to your destination is only part of the process. Getting where you need to go once you arrive is the next challenge, and these apps want to help.",
            copyright: "Wu Hong/EPA, via Shutterstock"
          }
        ],
        short_url: "https://nyti.ms/2UuIrJ8"
      },
      {
        section: "Business",
        subsection: "Media",
        title:
          "Numbers Are In for ‘Marvelous Mrs. Maisel,’ Courtesy of Nielsen",
        abstract:
          "The second season averaged 1.9 million viewers during its first seven days, according to Nielsen, which released an Amazon show’s figures for the first time.",
        url:
          "https://www.nytimes.com/2019/02/01/business/media/marvelous-mrs-maisel-amazon-ratings.html",
        byline: "By JOHN KOBLIN",
        item_type: "Article",
        updated_date: "2019-02-01T17:01:37-05:00",
        created_date: "2019-02-01T16:36:24-05:00",
        published_date: "2019-02-01T16:36:24-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Ratings (Audience Measurement)",
          "Television",
          "The Marvelous Mrs. Maisel (TV Program)"
        ],
        org_facet: ["Amazon.com Inc", "Nielsen Media Research"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04MAISEL-print/04MAISEL-01-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Amazon&rsquo;s &ldquo;The Marvelous Mrs. Maisel,&rdquo; starring Rachel Brosnahan, is particularly popular among wealthier viewers on the coasts, according to data from Nielsen.",
            copyright: "Amazon"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04MAISEL-print/04MAISEL-01-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Amazon&rsquo;s &ldquo;The Marvelous Mrs. Maisel,&rdquo; starring Rachel Brosnahan, is particularly popular among wealthier viewers on the coasts, according to data from Nielsen.",
            copyright: "Amazon"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04MAISEL-print/merlin_148145019_37382b2d-a3ed-463c-b5c4-6fb5adda55c7-articleInline.jpg",
            format: "Normal",
            height: 132,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Amazon&rsquo;s &ldquo;The Marvelous Mrs. Maisel,&rdquo; starring Rachel Brosnahan, is particularly popular among wealthier viewers on the coasts, according to data from Nielsen.",
            copyright: "Amazon"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04MAISEL-print/04MAISEL-01-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Amazon&rsquo;s &ldquo;The Marvelous Mrs. Maisel,&rdquo; starring Rachel Brosnahan, is particularly popular among wealthier viewers on the coasts, according to data from Nielsen.",
            copyright: "Amazon"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04MAISEL-print/merlin_148145019_37382b2d-a3ed-463c-b5c4-6fb5adda55c7-superJumbo.jpg",
            format: "superJumbo",
            height: 1418,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Amazon&rsquo;s &ldquo;The Marvelous Mrs. Maisel,&rdquo; starring Rachel Brosnahan, is particularly popular among wealthier viewers on the coasts, according to data from Nielsen.",
            copyright: "Amazon"
          }
        ],
        short_url: "https://nyti.ms/2DONqyA"
      },
      {
        section: "Business",
        subsection: "Economy",
        title: "Foxconn Affirms Wisconsin Factory Plan, Citing Trump Chat",
        abstract:
          "The company, which has shifted the project’s emphasis from manufacturing, said it would include a plant that turns out displays for consumer products.",
        url:
          "https://www.nytimes.com/2019/02/01/business/economy/foxconn-wisconsin-plant.html",
        byline: "By NATALIE KITROEFF",
        item_type: "Article",
        updated_date: "2019-02-01T19:13:53-05:00",
        created_date: "2019-02-01T14:05:01-05:00",
        published_date: "2019-02-01T14:05:01-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Factories and Manufacturing",
          "Labor and Jobs",
          "United States Politics and Government"
        ],
        org_facet: ["Foxconn Technology"],
        per_facet: ["Gou, Terry (1950- )", "Trump, Donald J"],
        geo_facet: ["Wisconsin"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02foxconn04/02foxconn04-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "President Trump being briefed on Foxconn’s Wisconsin plans during a visit last June for a groundbreaking ceremony. The company’s investment was initially heralded as a prospective source of 13,000 manufacturing jobs.",
            copyright: "Evan Vucci/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02foxconn04/02foxconn04-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "President Trump being briefed on Foxconn’s Wisconsin plans during a visit last June for a groundbreaking ceremony. The company’s investment was initially heralded as a prospective source of 13,000 manufacturing jobs.",
            copyright: "Evan Vucci/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02foxconn04/merlin_150026391_3f3b78a8-7b46-4d52-9978-d23ef6b32012-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "President Trump being briefed on Foxconn’s Wisconsin plans during a visit last June for a groundbreaking ceremony. The company’s investment was initially heralded as a prospective source of 13,000 manufacturing jobs.",
            copyright: "Evan Vucci/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02foxconn04/merlin_150026391_3f3b78a8-7b46-4d52-9978-d23ef6b32012-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "President Trump being briefed on Foxconn’s Wisconsin plans during a visit last June for a groundbreaking ceremony. The company’s investment was initially heralded as a prospective source of 13,000 manufacturing jobs.",
            copyright: "Evan Vucci/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02foxconn04/merlin_150026391_3f3b78a8-7b46-4d52-9978-d23ef6b32012-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "President Trump being briefed on Foxconn’s Wisconsin plans during a visit last June for a groundbreaking ceremony. The company’s investment was initially heralded as a prospective source of 13,000 manufacturing jobs.",
            copyright: "Evan Vucci/Associated Press"
          }
        ],
        short_url: "https://nyti.ms/2UyYsO1"
      },
      {
        section: "Business",
        subsection: "Media",
        title: "Digital Media: What Went Wrong",
        abstract:
          "For years, BuzzFeed seemed to be leading the journalism industry toward a brave new future. Now that it has stumbled, the way ahead looks more old-school than ever.",
        url:
          "https://www.nytimes.com/2019/02/01/business/media/buzzfeed-digital-media-wrong.html",
        byline: "By EDMUND LEE",
        item_type: "Article",
        updated_date: "2019-02-01T15:36:15-05:00",
        created_date: "2019-02-01T11:20:40-05:00",
        published_date: "2019-02-01T11:20:40-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "News and News Media",
          "Computers and the Internet",
          "Online Advertising"
        ],
        org_facet: [
          "BuzzFeed Inc",
          "Axios Media Inc",
          "New York Times",
          "Vice Media Inc",
          "Vox Media Inc"
        ],
        per_facet: [
          "Bankoff, James Philip",
          "Lessin, Jessica E",
          "Peretti, Jonah H",
          "Polgreen, Lydia",
          "Smith, Ben E",
          "VandeHei, Jim",
          "Zuckerberg, Mark E"
        ],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04digitalmedia-thumb/04digitalmedia-thumb-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "illustration",
            caption: "",
            copyright: "Andrew Sondern/The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04digitalmedia-thumb/04digitalmedia-thumb-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "illustration",
            caption: "",
            copyright: "Andrew Sondern/The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04digitalmedia-thumb/04digitalmedia-thumb-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "illustration",
            caption: "",
            copyright: "Andrew Sondern/The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04digitalmedia-thumb/04digitalmedia-thumb-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "illustration",
            caption: "",
            copyright: "Andrew Sondern/The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/04/business/04digitalmedia-thumb/04digitalmedia-thumb-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "illustration",
            caption: "",
            copyright: "Andrew Sondern/The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2DNVfol"
      },
      {
        section: "Technology",
        subsection: "",
        title: "The Week in Tech: Bracing for the Year of the Pig in China",
        abstract:
          "Li Yuan, Asia tech columnist for The Times, says it could be a tough year for tech workers in China amid a growing trade war with the United States.",
        url:
          "https://www.nytimes.com/2019/02/01/technology/the-week-in-tech.html",
        byline: "By LI YUAN",
        item_type: "Article",
        updated_date: "2019-02-03T12:46:02-05:00",
        created_date: "2019-02-01T09:00:01-05:00",
        published_date: "2019-02-01T09:00:01-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "United States International Relations",
          "Lunar New Year",
          "International Trade and World Market",
          "Factories and Manufacturing"
        ],
        org_facet: [
          "Apple Inc",
          "Communist Party of China",
          "Foxconn Technology",
          "Huawei Technologies Co Ltd"
        ],
        per_facet: ["Xi Jinping", "Soros, George", "Trump, Donald J"],
        geo_facet: ["China", "Tonga", "Wisconsin"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02technewsletter/02technewsletter-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Outside a Huawei store in Beijing on Tuesday. The company is at the center of a tech Cold War between the United States and China.",
            copyright: "Wang Zhao/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02technewsletter/02technewsletter-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Outside a Huawei store in Beijing on Tuesday. The company is at the center of a tech Cold War between the United States and China.",
            copyright: "Wang Zhao/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02technewsletter/merlin_149920947_191fd748-916f-45e8-9ff1-5c4ed1552a45-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Outside a Huawei store in Beijing on Tuesday. The company is at the center of a tech Cold War between the United States and China.",
            copyright: "Wang Zhao/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02technewsletter/merlin_149920947_191fd748-916f-45e8-9ff1-5c4ed1552a45-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Outside a Huawei store in Beijing on Tuesday. The company is at the center of a tech Cold War between the United States and China.",
            copyright: "Wang Zhao/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02technewsletter/merlin_149920947_191fd748-916f-45e8-9ff1-5c4ed1552a45-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Outside a Huawei store in Beijing on Tuesday. The company is at the center of a tech Cold War between the United States and China.",
            copyright: "Wang Zhao/Agence France-Presse — Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2DNZKiU"
      },
      {
        section: "Business",
        subsection: "",
        title: "Apple Takes a Hit in China, and Workers There Feel the Pain",
        abstract:
          "Chinese factories, which have long made goods for the world, increasingly make stuff for the country’s own middle class. When those spenders hold back, local workers can suffer.",
        url:
          "https://www.nytimes.com/2019/02/01/business/apple-china-iphone-jobs.html",
        byline: "By AILIN TANG",
        item_type: "Article",
        updated_date: "2019-02-01T02:09:27-05:00",
        created_date: "2019-02-01T02:09:27-05:00",
        published_date: "2019-02-01T02:09:27-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Labor and Jobs",
          "Wages and Salaries",
          "Working Hours",
          "Factories and Manufacturing",
          "Smartphones",
          "International Trade and World Market"
        ],
        org_facet: ["Apple Inc", "Pegatron Corp"],
        per_facet: [],
        geo_facet: ["China"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31applechina-1/00applechina-1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Workers heading home from the Changshuo factory in Huojiancun, China. Many said their paychecks had dwindled as weak iPhone demand led to less overtime.",
            copyright: "Yuyang Liu for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31applechina-1/00applechina-1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Workers heading home from the Changshuo factory in Huojiancun, China. Many said their paychecks had dwindled as weak iPhone demand led to less overtime.",
            copyright: "Yuyang Liu for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31applechina-1/00applechina-1-articleInline.jpg",
            format: "Normal",
            height: 122,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Workers heading home from the Changshuo factory in Huojiancun, China. Many said their paychecks had dwindled as weak iPhone demand led to less overtime.",
            copyright: "Yuyang Liu for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31applechina-1/00applechina-1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Workers heading home from the Changshuo factory in Huojiancun, China. Many said their paychecks had dwindled as weak iPhone demand led to less overtime.",
            copyright: "Yuyang Liu for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31applechina-1/merlin_149886720_c29d4f41-0369-4e78-80b2-3ca870948c8d-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Workers heading home from the Changshuo factory in Huojiancun, China. Many said their paychecks had dwindled as weak iPhone demand led to less overtime.",
            copyright: "Yuyang Liu for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2UDwSQ3"
      },
      {
        section: "Technology",
        subsection: "",
        title: "Amazon’s Sales Growth Slows, Even as Cloud Business Stays Hot",
        abstract:
          "The company is compensating for slowing growth in e-commerce by expanding its fast-moving, highly profitable cloud and advertising businesses.",
        url:
          "https://www.nytimes.com/2019/01/31/technology/amazon-earnings-sales-cloud.html",
        byline: "By KAREN WEISE",
        item_type: "Article",
        updated_date: "2019-01-31T20:04:30-05:00",
        created_date: "2019-01-31T20:04:30-05:00",
        published_date: "2019-01-31T20:04:30-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Company Reports",
          "E-Commerce",
          "Cloud Computing",
          "Advertising and Marketing"
        ],
        org_facet: ["Amazon.com Inc"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01amazon/01amazon-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Amazon reported that its retail sales and services revenue grew 17 percent, to almost $65 billion globally, in the latest quarter.",
            copyright: "Demetrius Freeman for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01amazon/01amazon-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Amazon reported that its retail sales and services revenue grew 17 percent, to almost $65 billion globally, in the latest quarter.",
            copyright: "Demetrius Freeman for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01amazon/merlin_145496019_761e6956-3704-48f9-acab-fdc47e679d56-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Amazon reported that its retail sales and services revenue grew 17 percent, to almost $65 billion globally, in the latest quarter.",
            copyright: "Demetrius Freeman for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01amazon/merlin_145496019_761e6956-3704-48f9-acab-fdc47e679d56-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Amazon reported that its retail sales and services revenue grew 17 percent, to almost $65 billion globally, in the latest quarter.",
            copyright: "Demetrius Freeman for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01amazon/merlin_145496019_761e6956-3704-48f9-acab-fdc47e679d56-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Amazon reported that its retail sales and services revenue grew 17 percent, to almost $65 billion globally, in the latest quarter.",
            copyright: "Demetrius Freeman for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2Sj3i4B"
      },
      {
        section: "Arts",
        subsection: "Art & Design",
        title: "An 1840s Road Trip, Captured on Lustrous Silver",
        abstract:
          "An exquisite show at the Metropolitan Museum of Art recalls travel before digital maps, when photography was the hottest of new media.",
        url:
          "https://www.nytimes.com/2019/01/31/arts/design/photography-girault-de-prangey-met-museum.html",
        byline: "By JASON FARAGO",
        item_type: "Article",
        updated_date: "2019-01-31T17:13:31-05:00",
        created_date: "2019-01-31T15:01:36-05:00",
        published_date: "2019-01-31T15:01:36-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: ["Photography", "Art", "Museums", "Cameras"],
        org_facet: ["Metropolitan Museum of Art"],
        per_facet: ["Girault de Prangey, Joseph-Philibert"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/arts/01met-journey1/01met-journey1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Girault de Prangey&rsquo;s image of the Roman Forum, viewed from the Palatine Hill in 1842.",
            copyright: "Harry Ransom Center, University of Texas at Austin"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/arts/01met-journey1/01met-journey1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Girault de Prangey&rsquo;s image of the Roman Forum, viewed from the Palatine Hill in 1842.",
            copyright: "Harry Ransom Center, University of Texas at Austin"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/arts/01met-journey1/01met-journey1-articleInline.jpg",
            format: "Normal",
            height: 67,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Girault de Prangey&rsquo;s image of the Roman Forum, viewed from the Palatine Hill in 1842.",
            copyright: "Harry Ransom Center, University of Texas at Austin"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/arts/01met-journey1/01met-journey1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Girault de Prangey&rsquo;s image of the Roman Forum, viewed from the Palatine Hill in 1842.",
            copyright: "Harry Ransom Center, University of Texas at Austin"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/arts/01met-journey1/01met-journey1-superJumbo.jpg",
            format: "superJumbo",
            height: 726,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Girault de Prangey&rsquo;s image of the Roman Forum, viewed from the Palatine Hill in 1842.",
            copyright: "Harry Ransom Center, University of Texas at Austin"
          }
        ],
        short_url: "https://nyti.ms/2UwffBs"
      },
      {
        section: "Business",
        subsection: "Media",
        title: "It’s Not the Stuff of a Playful BuzzFeed Quiz",
        abstract:
          "For the 220 people laid off recently at the digital publisher, a harsh reality hit this week that included a fight for better severance pay and attacks from trolls.",
        url:
          "https://www.nytimes.com/2019/01/31/business/media/buzzfeed-layoffs.html",
        byline: "By JACLYN PEISER",
        item_type: "Article",
        updated_date: "2019-01-31T14:25:29-05:00",
        created_date: "2019-01-31T14:25:29-05:00",
        published_date: "2019-01-31T14:25:29-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Layoffs and Job Reductions",
          "Paid Time Off",
          "Computers and the Internet"
        ],
        org_facet: ["BuzzFeed Inc"],
        per_facet: ["Peretti, Jonah H", "Lepore, Jill", "Smith, Ben E"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01BUZZFEED/01BUZZFEED-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "BuzzFeed headquarters in New York. After pressuring the company, workers who were laid off were told they would be compensated for paid time off — unused vacation and comp days — as part of their severance.",
            copyright: "Drew Angerer/Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01BUZZFEED/01BUZZFEED-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "BuzzFeed headquarters in New York. After pressuring the company, workers who were laid off were told they would be compensated for paid time off — unused vacation and comp days — as part of their severance.",
            copyright: "Drew Angerer/Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01BUZZFEED/01BUZZFEED-articleInline.jpg",
            format: "Normal",
            height: 132,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "BuzzFeed headquarters in New York. After pressuring the company, workers who were laid off were told they would be compensated for paid time off — unused vacation and comp days — as part of their severance.",
            copyright: "Drew Angerer/Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01BUZZFEED/01BUZZFEED-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "BuzzFeed headquarters in New York. After pressuring the company, workers who were laid off were told they would be compensated for paid time off — unused vacation and comp days — as part of their severance.",
            copyright: "Drew Angerer/Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01BUZZFEED/merlin_148026480_bcb5a1db-cc31-46ae-814b-fae452b5708f-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "BuzzFeed headquarters in New York. After pressuring the company, workers who were laid off were told they would be compensated for paid time off — unused vacation and comp days — as part of their severance.",
            copyright: "Drew Angerer/Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2Sfy0vE"
      },
      {
        section: "Technology",
        subsection: "",
        title:
          "Chip Giant Intel Picks Interim Leader as Permanent C.E.O. After Long Search",
        abstract:
          "Robert Swan takes the helm at a time when the Silicon Valley company is financially strong but facing questions about its future.",
        url:
          "https://www.nytimes.com/2019/01/31/technology/intel-ceo-robert-swan.html",
        byline: "By DON CLARK",
        item_type: "Article",
        updated_date: "2019-01-31T17:16:23-05:00",
        created_date: "2019-01-31T13:05:37-05:00",
        published_date: "2019-01-31T13:05:37-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: ["Appointments and Executive Changes", "Computer Chips"],
        org_facet: ["Intel Corporation"],
        per_facet: ["Swan, Robert H", "Krzanich, Brian M"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01chips/01chips-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Robert Swan, who had been serving as Intel’s interim chief executive, was named to the job on a permanent basis on Thursday.",
            copyright: "Samyukta Lakshmi/Bloomberg"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01chips/01chips-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Robert Swan, who had been serving as Intel’s interim chief executive, was named to the job on a permanent basis on Thursday.",
            copyright: "Samyukta Lakshmi/Bloomberg"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01chips/merlin_150019299_fbbbde01-9004-4e39-9eaf-a6006cbc6a93-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Robert Swan, who had been serving as Intel’s interim chief executive, was named to the job on a permanent basis on Thursday.",
            copyright: "Samyukta Lakshmi/Bloomberg"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01chips/merlin_150019299_fbbbde01-9004-4e39-9eaf-a6006cbc6a93-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Robert Swan, who had been serving as Intel’s interim chief executive, was named to the job on a permanent basis on Thursday.",
            copyright: "Samyukta Lakshmi/Bloomberg"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/business/01chips/merlin_150019299_fbbbde01-9004-4e39-9eaf-a6006cbc6a93-superJumbo.jpg",
            format: "superJumbo",
            height: 1366,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Robert Swan, who had been serving as Intel’s interim chief executive, was named to the job on a permanent basis on Thursday.",
            copyright: "Samyukta Lakshmi/Bloomberg"
          }
        ],
        short_url: "https://nyti.ms/2So8pAN"
      },
      {
        section: "Business",
        subsection: "",
        title:
          "Julia Hartz Founded Eventbrite With Her Fiancé. Then She Took His Job.",
        abstract:
          "The California native is “an energy person” who worked in TV and then did a little of everything at the couple’s start-up. It all prepared her to take it public.",
        url:
          "https://www.nytimes.com/2019/01/31/business/julia-hartz-eventbrite-corner-office.html",
        byline: "By DAVID GELLES",
        item_type: "Article",
        updated_date: "2019-01-31T06:00:04-05:00",
        created_date: "2019-01-31T06:00:04-05:00",
        published_date: "2019-01-31T06:00:04-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Computers and the Internet",
          "Initial Public Offerings",
          "Start-ups",
          "Labor and Jobs"
        ],
        org_facet: ["Eventbrite"],
        per_facet: ["Hartz, Julia (1979- )"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02corneroffice/02corneroffice-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Erik Tanner for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02corneroffice/02corneroffice-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Erik Tanner for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02corneroffice/02corneroffice-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Erik Tanner for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02corneroffice/02corneroffice-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Erik Tanner for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/02/business/02corneroffice/02corneroffice-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Erik Tanner for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2GdYmra"
      },
      {
        section: "World",
        subsection: "Asia Pacific",
        title:
          "Could You Last 11 Days Without the Internet? Tonga Finds Out the Hard Way",
        abstract:
          "Since a fiber-optic cable was severed on Jan. 20, contact with the outside world has been difficult for residents of the remote island nation.",
        url:
          "https://www.nytimes.com/2019/01/31/world/asia/tonga-internet-blackout.html",
        byline: "By DANIEL VICTOR",
        item_type: "Article",
        updated_date: "2019-02-01T04:40:21-05:00",
        created_date: "2019-01-31T04:14:31-05:00",
        published_date: "2019-01-31T04:14:31-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: ["Wire and Cable", "Computers and the Internet"],
        org_facet: [],
        per_facet: [],
        geo_facet: ["Tonga"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/world/01xp-tonga-print/01xp-tonga-1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Nukuʻalofa, Tonga&rsquo;s capital, in 2012. The Pacific island nation has essentially gone without internet access since a fiber-optic cable was cut on Jan. 20.",
            copyright:
              "Torsten Blackwood/Agence France-Presse &mdash; Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/world/01xp-tonga-print/01xp-tonga-1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Nukuʻalofa, Tonga&rsquo;s capital, in 2012. The Pacific island nation has essentially gone without internet access since a fiber-optic cable was cut on Jan. 20.",
            copyright:
              "Torsten Blackwood/Agence France-Presse &mdash; Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/world/01xp-tonga-print/merlin_150003774_8ccbdd5b-2082-41e5-85e3-0723f373209b-articleInline.jpg",
            format: "Normal",
            height: 120,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Nukuʻalofa, Tonga&rsquo;s capital, in 2012. The Pacific island nation has essentially gone without internet access since a fiber-optic cable was cut on Jan. 20.",
            copyright:
              "Torsten Blackwood/Agence France-Presse &mdash; Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/world/01xp-tonga-print/01xp-tonga-1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Nukuʻalofa, Tonga&rsquo;s capital, in 2012. The Pacific island nation has essentially gone without internet access since a fiber-optic cable was cut on Jan. 20.",
            copyright:
              "Torsten Blackwood/Agence France-Presse &mdash; Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/01/world/01xp-tonga-print/merlin_150003774_8ccbdd5b-2082-41e5-85e3-0723f373209b-superJumbo.jpg",
            format: "superJumbo",
            height: 1294,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Nukuʻalofa, Tonga&rsquo;s capital, in 2012. The Pacific island nation has essentially gone without internet access since a fiber-optic cable was cut on Jan. 20.",
            copyright:
              "Torsten Blackwood/Agence France-Presse &mdash; Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2ScnJAl"
      },
      {
        section: "Technology",
        subsection: "",
        title:
          "Releasing Earnings, Microsoft Stays in Stride, With Cloud Powering the Way",
        abstract:
          "The company reported revenue of $32.5 billion in the last quarter, and it made a profit of almost $8.6 billion, big increases over the same period a year ago.",
        url:
          "https://www.nytimes.com/2019/01/30/technology/microsoft-earnings.html",
        byline: "By KAREN WEISE",
        item_type: "Article",
        updated_date: "2019-01-30T20:14:24-05:00",
        created_date: "2019-01-30T20:14:24-05:00",
        published_date: "2019-01-30T20:14:24-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Cloud Computing",
          "Computers and the Internet",
          "Enterprise Computing",
          "Company Reports",
          "Artificial Intelligence",
          "Windows (Operating System)",
          "Data Centers"
        ],
        org_facet: ["Microsoft Corp", "Amazon.com Inc"],
        per_facet: ["Nadella, Satya", "Hood, Amy"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31MICROSOFT/merlin_149885700_53d43249-7d43-49e7-9ed4-6833369852af-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "For the last quarter, Microsoft reported revenue of almost $32.5 billion, along with a profit of almost $8.6 billion. Both figures showed an increase of more than 10 percent over the same period a year ago.",
            copyright: "Mike Blake/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31MICROSOFT/merlin_149885700_53d43249-7d43-49e7-9ed4-6833369852af-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "For the last quarter, Microsoft reported revenue of almost $32.5 billion, along with a profit of almost $8.6 billion. Both figures showed an increase of more than 10 percent over the same period a year ago.",
            copyright: "Mike Blake/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31MICROSOFT/merlin_149885700_53d43249-7d43-49e7-9ed4-6833369852af-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "For the last quarter, Microsoft reported revenue of almost $32.5 billion, along with a profit of almost $8.6 billion. Both figures showed an increase of more than 10 percent over the same period a year ago.",
            copyright: "Mike Blake/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31MICROSOFT/merlin_149885700_53d43249-7d43-49e7-9ed4-6833369852af-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "For the last quarter, Microsoft reported revenue of almost $32.5 billion, along with a profit of almost $8.6 billion. Both figures showed an increase of more than 10 percent over the same period a year ago.",
            copyright: "Mike Blake/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31MICROSOFT/merlin_149885700_53d43249-7d43-49e7-9ed4-6833369852af-superJumbo.jpg",
            format: "superJumbo",
            height: 1366,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "For the last quarter, Microsoft reported revenue of almost $32.5 billion, along with a profit of almost $8.6 billion. Both figures showed an increase of more than 10 percent over the same period a year ago.",
            copyright: "Mike Blake/Reuters"
          }
        ],
        short_url: "https://nyti.ms/2GcmcUf"
      },
      {
        section: "Technology",
        subsection: "",
        title: "Maybe Only Tim Cook Can Fix Facebook’s Privacy Problem",
        abstract:
          "The cold war between Facebook and Apple over data use and privacy is heating up. How far should Mr. Cook take it?",
        url:
          "https://www.nytimes.com/2019/01/30/technology/facebook-privacy-apple-tim-cook.html",
        byline: "By KEVIN ROOSE",
        item_type: "Article",
        updated_date: "2019-01-30T19:50:27-05:00",
        created_date: "2019-01-30T19:50:27-05:00",
        published_date: "2019-01-30T19:50:27-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: ["Privacy", "Mobile Applications", "Social Media"],
        org_facet: ["Apple Inc", "Facebook Inc"],
        per_facet: ["Cook, Timothy D"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31ROOSE01/31ROOSE01-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Tim Cook, who has called privacy a “fundamental human right” and taken Facebook and Google to task for the misuse of user data in the past, could effectively become a technology regulator of last resort.",
            copyright: "Erica Yoon for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31ROOSE01/31ROOSE01-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Tim Cook, who has called privacy a “fundamental human right” and taken Facebook and Google to task for the misuse of user data in the past, could effectively become a technology regulator of last resort.",
            copyright: "Erica Yoon for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31ROOSE01/31ROOSE01-articleInline.jpg",
            format: "Normal",
            height: 119,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Tim Cook, who has called privacy a “fundamental human right” and taken Facebook and Google to task for the misuse of user data in the past, could effectively become a technology regulator of last resort.",
            copyright: "Erica Yoon for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31ROOSE01/31ROOSE01-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Tim Cook, who has called privacy a “fundamental human right” and taken Facebook and Google to task for the misuse of user data in the past, could effectively become a technology regulator of last resort.",
            copyright: "Erica Yoon for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31ROOSE01/31ROOSE01-superJumbo.jpg",
            format: "superJumbo",
            height: 1225,
            width: 1981,
            type: "image",
            subtype: "photo",
            caption:
              "Tim Cook, who has called privacy a “fundamental human right” and taken Facebook and Google to task for the misuse of user data in the past, could effectively become a technology regulator of last resort.",
            copyright: "Erica Yoon for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2Sju6BK"
      },
      {
        section: "Technology",
        subsection: "",
        title:
          "Firm That Sold Social Media Bots Settles With New York Attorney General",
        abstract:
          "The company, Devumi, was exposed as a leading wholesaler of fake Twitter followers in a New York Times investigation last year.",
        url:
          "https://www.nytimes.com/2019/01/30/technology/letitia-james-social-media-bots.html",
        byline: "By NICHOLAS CONFESSORE",
        item_type: "Article",
        updated_date: "2019-01-30T20:30:37-05:00",
        created_date: "2019-01-30T19:44:23-05:00",
        published_date: "2019-01-30T19:44:23-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: ["Social Media", "Frauds and Swindling", "Bots"],
        org_facet: ["Devumi Inc"],
        per_facet: ["James, Letitia"],
        geo_facet: ["New York State"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/nyregion/31devumi1/merlin_132739103_aa7d785a-e118-4f36-afb7-4af0f4a04795-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "The building in Manhattan where Devumi, a purveyor of fake social media accounts, claimed to have an office.",
            copyright: "Dave Sanders for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/nyregion/31devumi1/merlin_132739103_aa7d785a-e118-4f36-afb7-4af0f4a04795-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "The building in Manhattan where Devumi, a purveyor of fake social media accounts, claimed to have an office.",
            copyright: "Dave Sanders for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/nyregion/31devumi1/merlin_132739103_aa7d785a-e118-4f36-afb7-4af0f4a04795-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "The building in Manhattan where Devumi, a purveyor of fake social media accounts, claimed to have an office.",
            copyright: "Dave Sanders for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/nyregion/31devumi1/merlin_132739103_aa7d785a-e118-4f36-afb7-4af0f4a04795-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "The building in Manhattan where Devumi, a purveyor of fake social media accounts, claimed to have an office.",
            copyright: "Dave Sanders for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/nyregion/31devumi1/merlin_132739103_aa7d785a-e118-4f36-afb7-4af0f4a04795-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "The building in Manhattan where Devumi, a purveyor of fake social media accounts, claimed to have an office.",
            copyright: "Dave Sanders for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2Ge08bV"
      },
      {
        section: "Technology",
        subsection: "",
        title: "Facebook’s Profits and Revenue Climb as It Gains More Users",
        abstract:
          "Despite a painful year of scandals, the social network reported Wednesday that it continued to grow in the fourth quarter.",
        url:
          "https://www.nytimes.com/2019/01/30/technology/facebook-earnings-revenue-profit.html",
        byline: "By MIKE ISAAC",
        item_type: "Article",
        updated_date: "2019-01-30T20:13:55-05:00",
        created_date: "2019-01-30T17:00:51-05:00",
        published_date: "2019-01-30T17:00:51-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Company Reports",
          "Social Media",
          "Computers and the Internet",
          "Mobile Applications",
          "Rumors and Misinformation"
        ],
        org_facet: ["Facebook Inc", "Instagram Inc", "WhatsApp Inc"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31FACEBOOK01/31FACEBOOK01-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "The headquarters of Facebook, which reported Wednesday that it had 1.52 billion daily active users in the fourth quarter, up 9 percent from a year earlier.",
            copyright: "Marcio Jose Sanchez/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31FACEBOOK01/31FACEBOOK01-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "The headquarters of Facebook, which reported Wednesday that it had 1.52 billion daily active users in the fourth quarter, up 9 percent from a year earlier.",
            copyright: "Marcio Jose Sanchez/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31FACEBOOK01/merlin_136164381_65e6b0c3-5ee2-445a-ab11-d8507d7a47b2-articleInline.jpg",
            format: "Normal",
            height: 143,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "The headquarters of Facebook, which reported Wednesday that it had 1.52 billion daily active users in the fourth quarter, up 9 percent from a year earlier.",
            copyright: "Marcio Jose Sanchez/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31FACEBOOK01/31FACEBOOK01-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "The headquarters of Facebook, which reported Wednesday that it had 1.52 billion daily active users in the fourth quarter, up 9 percent from a year earlier.",
            copyright: "Marcio Jose Sanchez/Associated Press"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31FACEBOOK01/merlin_136164381_65e6b0c3-5ee2-445a-ab11-d8507d7a47b2-superJumbo.jpg",
            format: "superJumbo",
            height: 1541,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "The headquarters of Facebook, which reported Wednesday that it had 1.52 billion daily active users in the fourth quarter, up 9 percent from a year earlier.",
            copyright: "Marcio Jose Sanchez/Associated Press"
          }
        ],
        short_url: "https://nyti.ms/2G9eRVs"
      },
      {
        section: "Technology",
        subsection: "",
        title:
          "Amazon Users in India Will Get Less Choice and Pay More Under New Selling Rules",
        abstract:
          "Under pressure from small merchants, the Indian government is prohibiting Amazon and Walmart from selling products on their own sites.",
        url:
          "https://www.nytimes.com/2019/01/30/technology/amazon-walmart-flipkart-india.html",
        byline: "By VINDU GOEL",
        item_type: "Article",
        updated_date: "2019-01-30T16:56:46-05:00",
        created_date: "2019-01-30T16:56:46-05:00",
        published_date: "2019-01-30T16:56:46-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "E-Commerce",
          "Prices (Fares, Fees and Rates)",
          "Shopping and Retail"
        ],
        org_facet: ["Amazon.com Inc", "Flipkart.com", "Walmart Stores Inc"],
        per_facet: ["Modi, Narendra"],
        geo_facet: ["India"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31AMAZONINDIA01/merlin_148276161_3bd4290f-9151-4b05-8369-0321c27d2eac-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "An Amazon order and collection point in Tumkur, India, in December. New e-commerce rules in the country will make many items unavailable, at least temporarily, to shoppers in India as of Friday.",
            copyright: "Rebecca Conway for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31AMAZONINDIA01/merlin_148276161_3bd4290f-9151-4b05-8369-0321c27d2eac-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "An Amazon order and collection point in Tumkur, India, in December. New e-commerce rules in the country will make many items unavailable, at least temporarily, to shoppers in India as of Friday.",
            copyright: "Rebecca Conway for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31AMAZONINDIA01/merlin_148276161_3bd4290f-9151-4b05-8369-0321c27d2eac-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "An Amazon order and collection point in Tumkur, India, in December. New e-commerce rules in the country will make many items unavailable, at least temporarily, to shoppers in India as of Friday.",
            copyright: "Rebecca Conway for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31AMAZONINDIA01/merlin_148276161_3bd4290f-9151-4b05-8369-0321c27d2eac-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "An Amazon order and collection point in Tumkur, India, in December. New e-commerce rules in the country will make many items unavailable, at least temporarily, to shoppers in India as of Friday.",
            copyright: "Rebecca Conway for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31AMAZONINDIA01/merlin_148276161_3bd4290f-9151-4b05-8369-0321c27d2eac-superJumbo.jpg",
            format: "superJumbo",
            height: 1366,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "An Amazon order and collection point in Tumkur, India, in December. New e-commerce rules in the country will make many items unavailable, at least temporarily, to shoppers in India as of Friday.",
            copyright: "Rebecca Conway for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2G9oX90"
      },
      {
        section: "Smarter Living",
        subsection: "",
        title: "How to Make Your Office More Ergonomically Correct",
        abstract:
          "If your office leaves you with pain in your wrists, back or neck, it doesn’t have to be that way — in fact, it shouldn’t. Here’s how to fix it.",
        url:
          "https://www.nytimes.com/2019/01/30/smarter-living/how-to-office-more-ergonomic-tips.html",
        byline: "By MELINDA WENNER MOYER",
        item_type: "Article",
        updated_date: "2019-01-30T15:11:20-05:00",
        created_date: "2019-01-30T15:11:20-05:00",
        published_date: "2019-01-30T15:11:20-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Ergonomics",
          "Chairs",
          "Furniture",
          "Desks",
          "Computer Keyboards",
          "Workplace Environment"
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/19/world/19sl-ergonomics-1/31sl-ergonomics-1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "George Etheredge for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/19/world/19sl-ergonomics-1/31sl-ergonomics-1-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "George Etheredge for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/19/world/19sl-ergonomics-1/merlin_141887892_29ee8313-e012-4af1-b3ff-f9de275fbf3e-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "George Etheredge for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/19/world/19sl-ergonomics-1/31sl-ergonomics-1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "George Etheredge for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/19/world/19sl-ergonomics-1/merlin_141887892_29ee8313-e012-4af1-b3ff-f9de275fbf3e-superJumbo.jpg",
            format: "superJumbo",
            height: 1367,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "George Etheredge for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2SekwjH"
      },
      {
        section: "Technology",
        subsection: "Personal Tech",
        title: "An Arsenal of Skype, Voice Recorders and FOIAs",
        abstract:
          "Emily Bazelon, an investigative reporter at The New York Times Magazine, craves easy-to-use tools, whether for interviews, Freedom of Information Act records or her home TV.",
        url:
          "https://www.nytimes.com/2019/01/30/technology/personaltech/skype-voice-recorders-foias.html",
        byline: "By EMILY BAZELON",
        item_type: "Article",
        updated_date: "2019-01-30T15:10:55-05:00",
        created_date: "2019-01-30T12:57:52-05:00",
        published_date: "2019-01-30T12:57:52-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Computers and the Internet",
          "Recording Equipment",
          "Smartphones",
          "News Sources, Confidential Status of",
          "iPhone",
          "Freedom of Information Act",
          "Political Gabfest (Web-Original Program)"
        ],
        org_facet: ["Skype Technologies", "Slate (Magazine)"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31techusing05/31techusing05-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Emily Bazelon, a staff writer for The New York Times Magazine, recording an episode of Political Gabfest, the Slate podcast she hosts with David Plotz and John Dickerson.",
            copyright: "Sangsuk Sylvia Kang for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31techusing05/31techusing05-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Emily Bazelon, a staff writer for The New York Times Magazine, recording an episode of Political Gabfest, the Slate podcast she hosts with David Plotz and John Dickerson.",
            copyright: "Sangsuk Sylvia Kang for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31techusing05/merlin_149761389_0a00b0cc-7926-4ab6-85ef-b67f64501898-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Emily Bazelon, a staff writer for The New York Times Magazine, recording an episode of Political Gabfest, the Slate podcast she hosts with David Plotz and John Dickerson.",
            copyright: "Sangsuk Sylvia Kang for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31techusing05/31techusing05-mediumThreeByTwo210-v2.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Emily Bazelon, a staff writer for The New York Times Magazine, recording an episode of Political Gabfest, the Slate podcast she hosts with David Plotz and John Dickerson.",
            copyright: "Sangsuk Sylvia Kang for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31techusing05/merlin_149761389_0a00b0cc-7926-4ab6-85ef-b67f64501898-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Emily Bazelon, a staff writer for The New York Times Magazine, recording an episode of Political Gabfest, the Slate podcast she hosts with David Plotz and John Dickerson.",
            copyright: "Sangsuk Sylvia Kang for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2SezHct"
      },
      {
        section: "Business",
        subsection: "",
        title:
          "Foxconn Reconsidering Plans for a Wisconsin Factory Heralded by Trump",
        abstract:
          "The Taiwanese company’s intent to build a $10 billion plant with 13,000 jobs was hailed by President Trump. It now sees a shift toward research.",
        url:
          "https://www.nytimes.com/2019/01/30/business/foxconn-factory-wisconsin.html",
        byline: "By NATALIE KITROEFF, PATRICIA COHEN and MONICA DAVEY",
        item_type: "Article",
        updated_date: "2019-01-31T17:43:40-05:00",
        created_date: "2019-01-30T12:50:04-05:00",
        published_date: "2019-01-30T12:50:04-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Labor and Jobs",
          "Factories and Manufacturing",
          "Foreign Investments",
          "United States Politics and Government"
        ],
        org_facet: ["Foxconn Technology"],
        per_facet: [
          "Walker, Scott K",
          "Evers, Tony (1951- )",
          "Trump, Donald J"
        ],
        geo_facet: ["Wisconsin"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31foxconn01-print/31foxconn01-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "A Foxconn logo before the arrival of President Trump for a groundbreaking ceremony in Mount Pleasant, Wis., last June.",
            copyright: "Darren Hauck/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31foxconn01-print/31foxconn01-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "A Foxconn logo before the arrival of President Trump for a groundbreaking ceremony in Mount Pleasant, Wis., last June.",
            copyright: "Darren Hauck/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31foxconn01-print/merlin_146807877_0efea70f-9308-4dcc-b708-c6830649bcf7-articleInline.jpg",
            format: "Normal",
            height: 122,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "A Foxconn logo before the arrival of President Trump for a groundbreaking ceremony in Mount Pleasant, Wis., last June.",
            copyright: "Darren Hauck/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31foxconn01-print/31foxconn01-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "A Foxconn logo before the arrival of President Trump for a groundbreaking ceremony in Mount Pleasant, Wis., last June.",
            copyright: "Darren Hauck/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31foxconn01-print/merlin_146807877_0efea70f-9308-4dcc-b708-c6830649bcf7-superJumbo.jpg",
            format: "superJumbo",
            height: 1319,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "A Foxconn logo before the arrival of President Trump for a groundbreaking ceremony in Mount Pleasant, Wis., last June.",
            copyright: "Darren Hauck/Reuters"
          }
        ],
        short_url: "https://nyti.ms/2GbGtJC"
      },
      {
        section: "Technology",
        subsection: "",
        title: "Does Facebook Really Know How Many Fake Accounts It Has?",
        abstract:
          "The social network has disclosed an estimate for years, but a closer look raises lots of questions.",
        url:
          "https://www.nytimes.com/2019/01/30/technology/facebook-fake-accounts.html",
        byline: "By JACK NICAS",
        item_type: "Article",
        updated_date: "2019-01-30T17:20:10-05:00",
        created_date: "2019-01-30T10:52:47-05:00",
        published_date: "2019-01-30T10:52:47-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Rumors and Misinformation",
          "Social Media",
          "Corporate Social Responsibility",
          "Impostors (Criminal)"
        ],
        org_facet: ["Facebook Inc"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31fakebook/30fakebook-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Wren McDonald"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31fakebook/30fakebook-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Wren McDonald"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31fakebook/30fakebook-articleInline.jpg",
            format: "Normal",
            height: 190,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Wren McDonald"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31fakebook/31fakebook-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Wren McDonald"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31fakebook/30fakebook-superJumbo.jpg",
            format: "superJumbo",
            height: 2048,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Wren McDonald"
          }
        ],
        short_url: "https://nyti.ms/2HGpgdX"
      },
      {
        section: "Business",
        subsection: "",
        title: "Tesla Profit Declines, but Musk Says Cash Position Is Strong",
        abstract:
          "The electric-car maker reported a jump in sales and revenue and said it would have enough cash to pay off bonds coming due in March.",
        url:
          "https://www.nytimes.com/2019/01/30/business/tesla-earnings-elon-musk.html",
        byline: "By NEAL E. BOUDETTE",
        item_type: "Article",
        updated_date: "2019-01-30T21:13:42-05:00",
        created_date: "2019-01-30T10:38:09-05:00",
        published_date: "2019-01-30T10:38:09-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Electric and Hybrid Vehicles",
          "Company Reports",
          "Automobiles",
          "Customer Relations",
          "Prices (Fares, Fees and Rates)",
          "Tax Credits, Deductions and Exemptions"
        ],
        org_facet: ["Tesla Motors Inc"],
        per_facet: ["Musk, Elon"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31TESLA-2/31TESLA-2-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Rows of new Tesla Model 3 electric vehicles in Richmond, Calif., last year. Mr. Musk complained of “delivery logistics hell” as the model came off the production line.",
            copyright: "Stephen Lam/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31TESLA-2/31TESLA-2-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Rows of new Tesla Model 3 electric vehicles in Richmond, Calif., last year. Mr. Musk complained of “delivery logistics hell” as the model came off the production line.",
            copyright: "Stephen Lam/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31TESLA-2/merlin_149370243_f5f5be54-7c8e-456a-82d0-ed89caa1b5ea-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Rows of new Tesla Model 3 electric vehicles in Richmond, Calif., last year. Mr. Musk complained of “delivery logistics hell” as the model came off the production line.",
            copyright: "Stephen Lam/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31TESLA-2/merlin_149370243_f5f5be54-7c8e-456a-82d0-ed89caa1b5ea-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Rows of new Tesla Model 3 electric vehicles in Richmond, Calif., last year. Mr. Musk complained of “delivery logistics hell” as the model came off the production line.",
            copyright: "Stephen Lam/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31TESLA-2/merlin_149370243_f5f5be54-7c8e-456a-82d0-ed89caa1b5ea-superJumbo.jpg",
            format: "superJumbo",
            height: 1366,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Rows of new Tesla Model 3 electric vehicles in Richmond, Calif., last year. Mr. Musk complained of “delivery logistics hell” as the model came off the production line.",
            copyright: "Stephen Lam/Reuters"
          }
        ],
        short_url: "https://nyti.ms/2HSnmaf"
      },
      {
        section: "Arts",
        subsection: "",
        title: "Fyre Festival, Theranos and Our Never-Ending ‘Scam Season’",
        abstract:
          "The conditions that produced Billy McFarland, Anna Delvey and Elizabeth Holmes show no signs of abating.",
        url:
          "https://www.nytimes.com/2019/01/30/arts/fyre-festival-billy-mcfarland-elizabeth-holmes-anna-delvey.html",
        byline: "By AMANDA HESS",
        item_type: "Article",
        updated_date: "2019-01-30T16:39:42-05:00",
        created_date: "2019-01-30T09:47:30-05:00",
        published_date: "2019-01-30T09:47:30-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Frauds and Swindling",
          "Social Media",
          "Fyre (Movie)",
          "Fyre Fraud (Movie)",
          "The Inventor (TV Program)",
          "Fyre Festival",
          "Entrepreneurship",
          "Millennial Generation",
          "Youth"
        ],
        org_facet: ["Theranos Inc"],
        per_facet: [
          "Holmes, Elizabeth (1984- )",
          "McFarland, Billy (1991- )",
          "Delvey, Anna (1991- )"
        ],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/arts/31scammers/31scammers-thumbStandard.gif",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Illustration by Johanna Goodman"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/arts/31scammers/31scammers-thumbLarge.gif",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Illustration by Johanna Goodman"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/arts/31scammers/31scammers-articleInline.gif",
            format: "Normal",
            height: 190,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Illustration by Johanna Goodman"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/arts/31scammers/31scammers-mediumThreeByTwo210.gif",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Illustration by Johanna Goodman"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/arts/31scammers/31scammers-superJumbo.gif",
            format: "superJumbo",
            height: 1050,
            width: 1050,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Illustration by Johanna Goodman"
          }
        ],
        short_url: "https://nyti.ms/2SaKN2k"
      },
      {
        section: "Business",
        subsection: "",
        title: "Alibaba, an Icon of China’s Growth, Now Reflects Its Slowdown",
        abstract:
          "The e-commerce giant posted numbers that pale in comparison to earlier surging figures, a sign of the country’s economic slowdown.",
        url:
          "https://www.nytimes.com/2019/01/30/business/alibaba-profit-results-china.html",
        byline: "By PAUL MOZUR",
        item_type: "Article",
        updated_date: "2019-01-30T14:09:02-05:00",
        created_date: "2019-01-30T07:24:06-05:00",
        published_date: "2019-01-30T07:24:06-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Economic Conditions and Trends",
          "E-Commerce",
          "Computers and the Internet",
          "Advertising and Marketing"
        ],
        org_facet: ["Alibaba Group Holding Ltd"],
        per_facet: ["Tsai, Joseph C"],
        geo_facet: ["China"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/world/31Alibaba/31Alibaba-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "An Alibaba warehouse in Suzhou, Jiangsu Province, China. The company said on Wednesday that its revenue had grown at the slowest pace since early 2016.",
            copyright: "Aly Song/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/world/31Alibaba/31Alibaba-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "An Alibaba warehouse in Suzhou, Jiangsu Province, China. The company said on Wednesday that its revenue had grown at the slowest pace since early 2016.",
            copyright: "Aly Song/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/world/31Alibaba/merlin_149919876_ecb49aea-5c8f-4fb8-84a4-5a11fb60161a-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "An Alibaba warehouse in Suzhou, Jiangsu Province, China. The company said on Wednesday that its revenue had grown at the slowest pace since early 2016.",
            copyright: "Aly Song/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/world/31Alibaba/merlin_149919876_ecb49aea-5c8f-4fb8-84a4-5a11fb60161a-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "An Alibaba warehouse in Suzhou, Jiangsu Province, China. The company said on Wednesday that its revenue had grown at the slowest pace since early 2016.",
            copyright: "Aly Song/Reuters"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/world/31Alibaba/merlin_149919876_ecb49aea-5c8f-4fb8-84a4-5a11fb60161a-superJumbo.jpg",
            format: "superJumbo",
            height: 1366,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "An Alibaba warehouse in Suzhou, Jiangsu Province, China. The company said on Wednesday that its revenue had grown at the slowest pace since early 2016.",
            copyright: "Aly Song/Reuters"
          }
        ],
        short_url: "https://nyti.ms/2SdHwPS"
      },
      {
        section: "Technology",
        subsection: "Personal Tech",
        title: "How to Save on Your Next Apple Purchase",
        abstract:
          "If recent increases are any indication, chances are your next iDevice will cost even more. We analyzed how prices have shot up and offer ways to buy for less.",
        url:
          "https://www.nytimes.com/2019/01/30/technology/personaltech/save-next-apple-purchase.html",
        byline: "By BRIAN X. CHEN",
        item_type: "Article",
        updated_date: "2019-01-30T05:00:05-05:00",
        created_date: "2019-01-30T05:00:06-05:00",
        published_date: "2019-01-30T05:00:06-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Computers and the Internet",
          "Tablet Computers",
          "iPad",
          "Software",
          "Prices (Fares, Fees and Rates)",
          "Smartphones",
          "Privacy",
          "iPhone"
        ],
        org_facet: ["Apple Inc"],
        per_facet: ["Cook, Timothy D"],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31Techfix-illo/31Techfix-illo-thumbStandard.gif",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Glenn Harvey"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31Techfix-illo/merlin_149955840_c769a7c5-310f-4c22-857f-50f6a604a4b5-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Glenn Harvey"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31Techfix-illo/31Techfix-illo-articleInline.gif",
            format: "Normal",
            height: 114,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Glenn Harvey"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31Techfix-illo/merlin_149955840_c769a7c5-310f-4c22-857f-50f6a604a4b5-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Glenn Harvey"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/31/business/31Techfix-illo/31Techfix-illo-superJumbo.gif",
            format: "superJumbo",
            height: 614,
            width: 1024,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Glenn Harvey"
          }
        ],
        short_url: "https://nyti.ms/2HGYvG5"
      },
      {
        section: "Technology",
        subsection: "",
        title:
          "Apple Was Slow to Act on FaceTime Bug That Allows Spying on iPhones",
        abstract:
          "A teenager in Arizona discovered the flaw, which allows eavesdropping, on Jan. 19, and his mother contacted Apple the next day. But the company was slow to reply.",
        url:
          "https://www.nytimes.com/2019/01/29/technology/facetime-glitch-apple.html",
        byline: "By NICOLE PERLROTH",
        item_type: "Article",
        updated_date: "2019-01-30T13:32:33-05:00",
        created_date: "2019-01-29T19:45:48-05:00",
        published_date: "2019-01-29T19:45:48-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "FaceTime",
          "Computer Security",
          "Videophones and Videoconferencing",
          "Wiretapping and Other Eavesdropping Devices and Methods",
          "Software",
          "Cyberattacks and Hackers",
          "Black Markets",
          "Smartphones"
        ],
        org_facet: ["Apple Inc"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/business/30FACEPALM03/30FACEPALM03-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "Apple is working on a FaceTime fix.",
            copyright: "Sascha Steinbach/EPA, via Shutterstock"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/business/30FACEPALM03/30FACEPALM03-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "Apple is working on a FaceTime fix.",
            copyright: "Sascha Steinbach/EPA, via Shutterstock"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/business/30FACEPALM03/merlin_149937243_cef3a2dd-c60d-4bc5-ae43-e5b1857b39d4-articleInline.jpg",
            format: "Normal",
            height: 122,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "Apple is working on a FaceTime fix.",
            copyright: "Sascha Steinbach/EPA, via Shutterstock"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/business/30FACEPALM03/30FACEPALM03-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "Apple is working on a FaceTime fix.",
            copyright: "Sascha Steinbach/EPA, via Shutterstock"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/business/30FACEPALM03/merlin_149937243_cef3a2dd-c60d-4bc5-ae43-e5b1857b39d4-superJumbo.jpg",
            format: "superJumbo",
            height: 1320,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption: "Apple is working on a FaceTime fix.",
            copyright: "Sascha Steinbach/EPA, via Shutterstock"
          }
        ],
        short_url: "https://nyti.ms/2SgXWqG"
      },
      {
        section: "Technology",
        subsection: "",
        title: "Apple Says Profits Were Flat, Citing Slump in China",
        abstract:
          "The iPhone maker, which reported quarterly earnings, faces a number of issues, from consumer demand in China to an unusual security bug in its iPhone software.",
        url:
          "https://www.nytimes.com/2019/01/29/technology/apple-earnings-china.html",
        byline: "By JACK NICAS",
        item_type: "Article",
        updated_date: "2019-01-29T20:01:12-05:00",
        created_date: "2019-01-29T16:30:03-05:00",
        published_date: "2019-01-29T16:30:03-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Company Reports",
          "Smartphones",
          "iPhone",
          "Computer Security",
          "Customs (Tariff)",
          "International Trade and World Market"
        ],
        org_facet: ["Apple Inc"],
        per_facet: [],
        geo_facet: ["China"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/business/30apple01/30apple01-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "An Apple store in Beijing. Citing slowing sales in China, Apple said Tuesday that its fourth-quarter profits were flat compared with a year earlier.",
            copyright: "Kevin Frayer/Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/business/30apple01/30apple01-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "An Apple store in Beijing. Citing slowing sales in China, Apple said Tuesday that its fourth-quarter profits were flat compared with a year earlier.",
            copyright: "Kevin Frayer/Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/business/30apple01/merlin_148866291_261a037b-9e29-4a65-893a-0634e9ccf224-articleInline.jpg",
            format: "Normal",
            height: 123,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "An Apple store in Beijing. Citing slowing sales in China, Apple said Tuesday that its fourth-quarter profits were flat compared with a year earlier.",
            copyright: "Kevin Frayer/Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/business/30apple01/30apple01-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "An Apple store in Beijing. Citing slowing sales in China, Apple said Tuesday that its fourth-quarter profits were flat compared with a year earlier.",
            copyright: "Kevin Frayer/Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/business/30apple01/merlin_148866291_261a037b-9e29-4a65-893a-0634e9ccf224-superJumbo.jpg",
            format: "superJumbo",
            height: 1321,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "An Apple store in Beijing. Citing slowing sales in China, Apple said Tuesday that its fourth-quarter profits were flat compared with a year earlier.",
            copyright: "Kevin Frayer/Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2HBvYBK"
      },
      {
        section: "Technology",
        subsection: "",
        title: "How to Disable FaceTime to Avoid Eavesdropping Bug",
        abstract:
          "Apple has disabled Group FaceTime, the feature that enabled the eavesdropping, while it works on a fix. But for extra security, follow these steps.",
        url:
          "https://www.nytimes.com/2019/01/29/technology/disable-facetime-bug.html",
        byline: "By MATTHEW HAAG",
        item_type: "Article",
        updated_date: "2019-01-30T13:22:10-05:00",
        created_date: "2019-01-29T11:34:02-05:00",
        published_date: "2019-01-29T11:34:02-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "iOS (Operating System)",
          "iPad",
          "iPhone",
          "Wiretapping and Other Eavesdropping Devices and Methods",
          "Mobile Applications"
        ],
        org_facet: ["Apple Inc"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/business/30xp-facetimefix2/30xp-facetimefix2-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "A recently uncovered bug in Apple’s FaceTime app allowed users to eavesdrop on someone else without their knowledge. The company said it is working on a fix.",
            copyright: "Odd Andersen/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/business/30xp-facetimefix2/30xp-facetimefix2-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "A recently uncovered bug in Apple’s FaceTime app allowed users to eavesdrop on someone else without their knowledge. The company said it is working on a fix.",
            copyright: "Odd Andersen/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/business/30xp-facetimefix2/30xp-facetimefix2-articleInline.jpg",
            format: "Normal",
            height: 121,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "A recently uncovered bug in Apple’s FaceTime app allowed users to eavesdrop on someone else without their knowledge. The company said it is working on a fix.",
            copyright: "Odd Andersen/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/business/30xp-facetimefix2/30xp-facetimefix2-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "A recently uncovered bug in Apple’s FaceTime app allowed users to eavesdrop on someone else without their knowledge. The company said it is working on a fix.",
            copyright: "Odd Andersen/Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/29/business/30xp-facetimefix2/30xp-facetimefix2-superJumbo.jpg",
            format: "superJumbo",
            height: 1304,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "A recently uncovered bug in Apple’s FaceTime app allowed users to eavesdrop on someone else without their knowledge. The company said it is working on a fix.",
            copyright: "Odd Andersen/Agence France-Presse — Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2S94YxH"
      },
      {
        section: "World",
        subsection: "Asia Pacific",
        title: "Data Breaches Dent Singapore’s Image as a Tech Innovator",
        abstract:
          "Experts say security concerns are a pitfall for countries that are pushing to make vast troves of data more accessible and centralized.",
        url:
          "https://www.nytimes.com/2019/01/29/world/asia/singapore-data-breach-hiv.html",
        byline: "By MIKE IVES",
        item_type: "Article",
        updated_date: "2019-01-29T09:23:51-05:00",
        created_date: "2019-01-29T09:23:51-05:00",
        published_date: "2019-01-29T09:23:51-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Acquired Immune Deficiency Syndrome",
          "Computer Security",
          "Politics and Government",
          "Cyberwarfare and Defense",
          "Computers and the Internet",
          "Electronic Health Records",
          "Privacy"
        ],
        org_facet: [],
        per_facet: [],
        geo_facet: ["Singapore"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/world/30singapore-2/30singapore-2-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "S. Iswaran, third from left, Singapore’s communication minister, said that personal data stolen in a cyberattack last year had not “emerged in any form” on the dark web.",
            copyright:
              "Mark Chong/The Straits Times, via Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/world/30singapore-2/30singapore-2-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "S. Iswaran, third from left, Singapore’s communication minister, said that personal data stolen in a cyberattack last year had not “emerged in any form” on the dark web.",
            copyright:
              "Mark Chong/The Straits Times, via Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/world/30singapore-2/merlin_141513918_78f61a98-9696-4f2f-b13f-027b11f86f36-articleInline.jpg",
            format: "Normal",
            height: 128,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "S. Iswaran, third from left, Singapore’s communication minister, said that personal data stolen in a cyberattack last year had not “emerged in any form” on the dark web.",
            copyright:
              "Mark Chong/The Straits Times, via Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/world/30singapore-2/30singapore-2-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "S. Iswaran, third from left, Singapore’s communication minister, said that personal data stolen in a cyberattack last year had not “emerged in any form” on the dark web.",
            copyright:
              "Mark Chong/The Straits Times, via Agence France-Presse — Getty Images"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/world/30singapore-2/merlin_141513918_78f61a98-9696-4f2f-b13f-027b11f86f36-superJumbo.jpg",
            format: "superJumbo",
            height: 1381,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "S. Iswaran, third from left, Singapore’s communication minister, said that personal data stolen in a cyberattack last year had not “emerged in any form” on the dark web.",
            copyright:
              "Mark Chong/The Straits Times, via Agence France-Presse — Getty Images"
          }
        ],
        short_url: "https://nyti.ms/2SjqcJm"
      },
      {
        section: "Technology",
        subsection: "",
        title:
          "Huawei and China, Facing U.S. Charges, Have Few Ways to Retaliate",
        abstract:
          "Slowing growth and the trade war could restrict Beijing’s ability to get tough. Huawei has shuffled its Washington staff, apparently seeking a reset in relations.",
        url:
          "https://www.nytimes.com/2019/01/29/technology/huawei-indictment-criminal-charges.html",
        byline: "By PAUL MOZUR and RAYMOND ZHONG",
        item_type: "Article",
        updated_date: "2019-01-29T22:48:14-05:00",
        created_date: "2019-01-29T07:11:49-05:00",
        published_date: "2019-01-29T07:11:49-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "United States International Relations",
          "Politics and Government",
          "Wireless Communications",
          "Cellular Telephones",
          "International Trade and World Market",
          "Customs (Tariff)"
        ],
        org_facet: ["Huawei Technologies Co Ltd", "T-Mobile US Inc"],
        per_facet: ["Meng Wanzhou", "Ren Zhengfei"],
        geo_facet: ["China", "Canada"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/world/30huawei-1/merlin_149914233_0fead824-a2ff-44cd-9182-1ee3bdd92360-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Wilbur Ross, the United States secretary of commerce, speaking on Monday about charges of bank fraud and stealing trade secrets against Huawei of China.",
            copyright: "Sarah Silbiger/The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/world/30huawei-1/merlin_149914233_0fead824-a2ff-44cd-9182-1ee3bdd92360-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Wilbur Ross, the United States secretary of commerce, speaking on Monday about charges of bank fraud and stealing trade secrets against Huawei of China.",
            copyright: "Sarah Silbiger/The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/world/30huawei-1/merlin_149914233_0fead824-a2ff-44cd-9182-1ee3bdd92360-articleInline.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Wilbur Ross, the United States secretary of commerce, speaking on Monday about charges of bank fraud and stealing trade secrets against Huawei of China.",
            copyright: "Sarah Silbiger/The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/world/30huawei-1/merlin_149914233_0fead824-a2ff-44cd-9182-1ee3bdd92360-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Wilbur Ross, the United States secretary of commerce, speaking on Monday about charges of bank fraud and stealing trade secrets against Huawei of China.",
            copyright: "Sarah Silbiger/The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/01/30/world/30huawei-1/merlin_149914233_0fead824-a2ff-44cd-9182-1ee3bdd92360-superJumbo.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Wilbur Ross, the United States secretary of commerce, speaking on Monday about charges of bank fraud and stealing trade secrets against Huawei of China.",
            copyright: "Sarah Silbiger/The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2HEWABM"
      },
      {
        section: "Travel",
        subsection: "",
        title: "At Surf Camp 2.0, Data Rules",
        abstract:
          "At the new Surf Simply resort in Costa Rica, guests are videotaped as they catch a wave, and that’s only the beginning of the tech-based coaching.",
        url: "https://www.nytimes.com/2019/01/29/travel/surf-camp-tech.html",
        byline: "By BONNIE TSUI",
        item_type: "Article",
        updated_date: "2019-01-29T10:11:44-05:00",
        created_date: "2019-01-29T05:00:11-05:00",
        published_date: "2019-01-29T05:00:11-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: ["Surfing", "Travel and Vacations"],
        org_facet: ["Surf Simply (Nosara, Costa Rica, Hotel)"],
        per_facet: [],
        geo_facet: ["Costa Rica"],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/travel/03costarica-surf01-promo/03costarica-surf01-promo-thumbStandard-v2.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption:
              "Staying upright during a training session at Surf Simply, in Nosara, Costa Rica.",
            copyright: "Brett Gundlock for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/travel/03costarica-surf01-promo/03costarica-surf01-promo-thumbLarge-v2.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption:
              "Staying upright during a training session at Surf Simply, in Nosara, Costa Rica.",
            copyright: "Brett Gundlock for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/travel/03costarica-surf01-promo/03costarica-surf01-promo-articleInline-v2.jpg",
            format: "Normal",
            height: 127,
            width: 190,
            type: "image",
            subtype: "photo",
            caption:
              "Staying upright during a training session at Surf Simply, in Nosara, Costa Rica.",
            copyright: "Brett Gundlock for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/travel/03costarica-surf01-promo/03costarica-surf01-promo-mediumThreeByTwo210-v2.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption:
              "Staying upright during a training session at Surf Simply, in Nosara, Costa Rica.",
            copyright: "Brett Gundlock for The New York Times"
          },
          {
            url:
              "https://static01.nyt.com/images/2019/02/03/travel/03costarica-surf01-promo/03costarica-surf01-promo-superJumbo-v2.jpg",
            format: "superJumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption:
              "Staying upright during a training session at Surf Simply, in Nosara, Costa Rica.",
            copyright: "Brett Gundlock for The New York Times"
          }
        ],
        short_url: "https://nyti.ms/2Hykf6W"
      },
      {
        section: "The Upshot",
        subsection: "",
        title: "Why Technology Hasn’t Fixed the Housing Crisis",
        abstract:
          "A lot of start-ups have promising ideas, but the fundamental problem of affordability seems beyond their reach.",
        url:
          "https://www.nytimes.com/2019/01/29/upshot/can-technology-help-fix-the-housing-market.html",
        byline: "By EMILY BADGER",
        item_type: "Article",
        updated_date: "2019-01-29T13:58:39-05:00",
        created_date: "2019-01-29T05:00:04-05:00",
        published_date: "2019-01-29T05:00:04-05:00",
        material_type_facet: "",
        kicker: "",
        des_facet: [
          "Real Estate and Housing (Residential)",
          "Affordable Housing",
          "Renting and Leasing (Real Estate)",
          "Homeless Persons",
          "Building (Construction)",
          "Computers and the Internet"
        ],
        org_facet: ["Enterprise Community Partners"],
        per_facet: [],
        geo_facet: [],
        multimedia: [
          {
            url:
              "https://static01.nyt.com/images/2017/10/27/upshot/00up-cities/00up-cities-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Jay Keeree"
          },
          {
            url:
              "https://static01.nyt.com/images/2017/10/27/upshot/00up-cities/00up-cities-thumbLarge.jpg",
            format: "thumbLarge",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Jay Keeree"
          },
          {
            url:
              "https://static01.nyt.com/images/2017/10/27/upshot/00up-cities/00up-cities-articleInline.jpg",
            format: "Normal",
            height: 117,
            width: 190,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Jay Keeree"
          },
          {
            url:
              "https://static01.nyt.com/images/2017/10/27/upshot/00up-cities/00up-cities-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Jay Keeree"
          },
          {
            url:
              "https://static01.nyt.com/images/2017/10/27/upshot/00up-cities/00up-cities-superJumbo-v2.gif",
            format: "superJumbo",
            height: 472,
            width: 768,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Jay Keeree"
          }
        ],
        short_url: "https://nyti.ms/2HDIv7V"
      }
    ]
  },
];

describe("shuffleArray", () => {
  it("should shuffle array correctly", () => {
    expect(shuffleArticles(array1)).toHaveLength(10);
  });
});

describe("FlattenArray", () => {
  it("should Flatten", () => {
    expect(Flatten([1, 2, 3, [4, 5, [6, 7]]])).toEqual([1, 2, 3, 4, 5, [6, 7]]);
  });
});
