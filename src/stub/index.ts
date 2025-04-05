import { ModalDetails } from '../app/models/modal';

export const rakeAngelDetails: ModalDetails = {
  srcImagesList: [
    '/assets/rakePic1.png',
    '/assets/rakePic2.png',
    '/assets/rakePic3.png',
  ],
  description:
    'Rake angle affects the ability of the tool to shear the work material and form the chip. Depending on the Tool Material and Workpc. material, It can be positive or negative. Positive rake angles reduce the cutting forces and negative angle increases the cutting forces. It is important to note that the rake angle mentioned here is the net effect of the rake angle in the insert and the inclination in the tool holder.Users are advised to check the configuration of the tool.In the event of uncertainity, it is recomended to use a default approximated value from above selection.',
  measure: 'degrees',
  min: -15,
  max: 30,
  value: 0,
  step: 1,
};

export const efficiencyDetails: ModalDetails = {
  srcImagesList: [
    '/assets/effiPic1.png',
    '/assets/effiPic2.png',
    '/assets/effiPic3.png',
  ],
  description:
    'Machine"s efficiency is the ratio of work output to work input. It is expressed as a percentage. While the efficiency of an ideal machine is 100 percent, an actual machine"s efficiency will always be less than 100% because of (for example, but not limited to) transmission losses. A modern CNC Machine with Direct drive often have very high efficiency upto 95% while gear train driven machine often exhibit machine efficiency of 75% to 85%',
  measure: 'percent',
  min: 70,
  max: 98,
  value: 70,
  step: 1,
};

export const wearFactorDetails: ModalDetails = {
  srcImagesList: [
    '/assets/wearPic1.jpg',
    '/assets/wearPic2.jpg',
    '/assets/wearPic3.jpg',
  ],
  description:
    'Wear factor denotes extent of wear on the cutting edge. This factor is used to adjust the calculated cutting force and power requirements to best reflect the conditions. Since the wear rate of the cutting material depends on various cutting conditions like machining operation, surface quality needed, workpiece material etc., it is difficult to accuratly predict the wear factor. The here given approximations, are based on experiental observations. In the event of uncertainity, it is recomended to use a default approximated value from above selection',
  measure: 'percent',
  min: 0,
  max: 50,
  value: 0,
  step: 1,
};
