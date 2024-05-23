import { ConfigType } from '@/services/config/config.types';
export const configDefaults: ConfigType = {
  profiles: [
    {
      uuid: '07ab72c4-183a-4e6c-ad98-32bd63086730',
      name: 'Do szkoły',
      stops: [
        {
          id: 41997,
          name: 'Waryńskiego - Kolejowa',
          street: 'Waryńskiego',
          latitude: '49.6054',
          longitude: '20.6954',
          number: '00171',
          direction: 0,
          stop_line_id: 113776,
          lines: ['9', '11', '13', '17', '18', '24', '43', '47', '49', '52'],
          direction_desc: {
            '9': 'Bohaterów Orła Białego => Rynek',
            '11': 'Przysietnica => Rynek.',
            '13': 'Konarskiego => Konarskiego',
            '17': 'Jana Pawła II => Barska',
            '18': 'Żeleźnikowa Wielka => Roszkowice',
            '24': 'Stary Sącz - Osiedle Słoneczne => Rynek',
            '43': 'Moszczenica => Rynek',
            '47': '',
            '49': '',
            '52': '',
          },
        },
        {
          id: 41484,
          name: 'Grottgera - Zielona',
          street: null,
          latitude: '49.6023',
          longitude: '20.6945',
          number: '02272',
          direction: 1,
          stop_line_id: 114203,
          lines: ['17'],
          direction_desc: {
            '17': 'Jana Pawła II => Barska',
          },
        },
        {
          id: 41614,
          name: 'Zielona - WSB',
          street: 'Zielona ',
          latitude: '49.6009',
          longitude: '20.6921',
          number: '00961',
          direction: 1,
          stop_line_id: 114202,
          lines: ['17', '27'],
          direction_desc: {
            '17': 'Jana Pawła II => Barska',
            '27': 'Piątkowa Łęg Granica => Dw.MPK. ',
          },
        },
      ],
    },
    {
      uuid: '41a65a08-dca8-401e-b7a8-129832cee211',
      name: 'Ze szkoły',
      stops: [
        {
          id: 42230,
          name: 'Rynek',
          street: 'Rynek',
          latitude: '49.6255',
          longitude: '20.6918',
          number: '00081',
          direction: 1,
          stop_line_id: 113693,
          lines: ['14', '15', '17', '27', '41', '25'],
          direction_desc: {
            '5': 'Dw.MPK stan.1 => Tarnowska',
            '7': 'Sucharskiego => Sucharskiego',
            '14': 'Wola Wyżna => Dw.MPK',
            '15': 'Mszalnica => Dw.MPK',
            '17': ' Barska => Jana Pawła II',
            '18': 'Żeleźnikowa Wielka => Roszkowice',
            '25': 'Mystków Most => Ogrodowa',
            '27': 'Piątkowa Łęg Granica => Dw.MPK. ',
            '28': 'Węgierska Galeria Sandecja => Roszkowice',
            '31': 'Dw.MPK stan.1 => Zabełcze - Gaj',
            '35': 'Jamnica => Rynek',
            '41': 'Osiedle Helena => Magazynowa',
            '42': ' Dw.MPK stan.1 => Osiedle Helena',
            '101': 'Stramki => Prażmowskiego.',
          },
        },
      ],
    },
    {
      uuid: 'f59583cd-7339-4ffc-9371-0be2095ec036',
      name: 'Basen',
      stops: [
        {
          id: 42239,
          name: 'Aleja Batorego - Dw. PKP',
          street: 'Aleja Batorego',
          latitude: '49.6082',
          longitude: '20.7016',
          number: '00015',
          direction: 1,
          stop_line_id: 114343,
          lines: ['23'],
          direction_desc: {
            '23': 'Sucharskiego => Sucharskiego',
            '25': 'Ogrodowa => Mystków Most',
            '27': 'Piątkowa Łęg Granica => Dw.MPK. ',
          },
        },
        {
          id: 41997,
          name: 'Waryńskiego - Kolejowa',
          street: 'Waryńskiego',
          latitude: '49.6054',
          longitude: '20.6954',
          number: '00171',
          direction: 0,
          stop_line_id: 113776,
          lines: ['9', '11', '13', '17', '18', '24', '43', '47', '49', '52'],
          direction_desc: {
            '9': 'Bohaterów Orła Białego => Rynek',
            '11': 'Przysietnica => Rynek.',
            '13': 'Konarskiego => Konarskiego',
            '17': 'Jana Pawła II => Barska',
            '18': 'Żeleźnikowa Wielka => Roszkowice',
            '24': 'Stary Sącz - Osiedle Słoneczne => Rynek',
            '43': 'Moszczenica => Rynek',
            '47': '',
            '49': '',
            '52': '',
          },
        },
      ],
    },
  ],
  currentProfile: 'f59583cd-7339-4ffc-9371-0be2095ec036',
};