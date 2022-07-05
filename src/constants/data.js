import  {v4 as uuidv4} from 'uuid'
export const data = [
  {
    id: uuidv4(),
    title: "assets",
    category: [
      {
        id: uuidv4(),
        title: "BioRepository",
        list: [
          {
            id: uuidv4(),
            name: `Emergency Eye Wash`,
            category: `Eye wash station`,
          },
          {
            id: uuidv4(),
            name: `Dishwasher`,
            category: `Dishwasher`,
          },
          {
            id: uuidv4(),
            name: `Water bottle filler`,
            category: `drinking fountain`,
          },
          {
            id: uuidv4(),
            name: `UPS`,
            category: `UPS`,
          },
        ],
      },
      {
        id:uuidv4(),
        title:"CoordinatingCenter",
        list:[
            {
                id:uuidv4(),
                name:'seincom2',
                category:'Security entrance intercom'
            },
            {
                id:uuidv4(),
                name:'seincom3',
                category:'Security entrance intercom'
            },
            {
                id:uuidv4(),
                name:'seincom4',
                category:'Security entrance intercom'
            },
        ]

      }
    ],
  },
  {
    id: uuidv4(),
    title: "inventory",
    category:[
        {
            id:uuidv4(),
            title:"AllItems",
            list:[
                {
                    id:uuidv4(),
                    item:"10 windows envelope",
                    storeroom:'fedx'
                },
                {
                    id:uuidv4(),
                    item:"2 core cable",
                    storeroom:'UPS'
                },
                {
                    id:uuidv4(),
                    item:"11 windows",
                    storeroom:'fedx'
                },
            ]
        },
        {
            id:uuidv4(),
            title:"UnderstockedItems",
            list:[
                {
                    id:uuidv4(),
                    item:"4 core cable",
                    storeroom:'facilio store room'
                },
                {
                    id:uuidv4(),
                    item:"chair",
                    storeroom:'ergonomics'
                },
                {
                    id:uuidv4(),
                    item:"tissue",
                    storeroom:'facilio store room'
                },
            ]
        }
    ]
  },
 
  
];
