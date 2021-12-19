const express = require('express')

const router = new express.Router()
const articles = [
    {
      title: 'Teaching in 2022',
      description: ' Only students holding 2G status (i.e. vaccinated or recovered) may participate in courses and use the library. For other necessary visits to the university (examinations, collecting SHK (student assistant) contracts, other administrative activities etc.) and for picking up books from the library, the 3G+ rule continues to apply.',
      timestamp: new Date(),
      image: 'https://ipg-automotive.com/fileadmin/_processed_/0/c/csm_IPG_Automotive_News_AI_2018_763a3701f9.jpg',
      link: '',
      likes: '2',
    },
    {
        title: 'Tighter regulations concerning the winter semester',
        description: 'As the 7-day incidence in Deggendorf is still around 1,000, for reasons of planning security, the virtual teaching will continue until Christmas, regardless of the respective daily incidence./n In events in which presence is mandatory (e.g. lab work, practicals, sporting events), 2G applies with immediate effect. This 2G status is continuously controlled by the event management. In concrete terms, this means that students who are neither vaccinated nor recovered are excluded from ALL attendance events with immediate effect.',
        timestamp: new Date(),
        image: 'https://orf.at/mojo/1_4_1/storyserver//news/common/images/og-fallback-news.png',
        link: '',
        likes: '0',
      },
  ];

router.get('/getNews', (req, res) => {
    res.status(200).json({"news": articles})
})

module.exports = router