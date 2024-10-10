import { useState } from "react";

export const CarEquipment = ({ car }) => {
  console.log(1234);
  const [equipment, setEquipment] = useState(false);

  return (
    <div className='collapse collapse-arrow border border-gray-300 rounded-md bg-white'>
      <input
        type='radio'
        name='equipment'
        checked={equipment}
        onClick={() => setEquipment(!equipment)}
      />
      <div className='collapse-title text-md font-semibold'>EQUIPMENT</div>

      <div className='collapse-content flex flex-col gap-2 p-0'>
        <div className='flex flex-col gap-8 border-t pt-8 px-4 pb-4'>
          <h1 className='font-semibold text-xl'>High-value equipment</h1>
          <ul className='list-disc flex flex-col px-10'>
            <li>Adaptative cruise control</li>
            <li>Climate Control - Automatic</li>
            <li>LED Front Dimming Lights</li>
            <li>LED Rear Dimming Lights</li>
            <li>Park assistant</li>
            <li>Parking Aid - Front</li>
            <li>Parking Aid - Rear</li>
            <li>Rear view camera</li>
            <li>Satellite Navigation System</li>
          </ul>
        </div>

        <div className='flex flex-col gap-4 border-t pt-8 px-4'>
          <h1 className='font-semibold text-xl'>All equipment</h1>
          <h1 className='font-semibold text-lg'>Additional Options</h1>
          <ul className='list-disc flex flex-col px-10'>
            <li>Adaptative cruise control</li>
            <li>Climate Control - Automatic</li>
            <li>LED Front Dimming Lights</li>
            <li>LED Rear Dimming Lights</li>
            <li>Park assistant</li>
            <li>Parking Aid - Front</li>
            <li>Parking Aid - Rear</li>
            <li>Rear view camera</li>
            <li>Satellite Navigation System</li>
            <li>Alloy Wheels</li>
            <li>Armrest(s) - Front</li>
            <li>Bluetooth interface</li>
            <li>Cruise control</li>
            <li>Digital instruments</li>
            <li>Electric tailgate</li>
            <li>Electric Windows - Front</li>
            <li>Electric Windows - Rear</li>
            <li>Keyless Engine start</li>
            <li>Mirrors External - Electric</li>
            <li>Paint - Metallic</li>
            <li>Power Assisted Steering</li>
            <li>Rain Sensor</li>
            <li>Seats - Electric Memory</li>
            <li>Seats - Electrically Adjustable Driver</li>
            <li>Seats - Electrically Adjustable Passenger</li>
            <li>Seats - Heated Driver</li>
            <li>Seats - Heated Passenger</li>
            <li>Steering Wheel - Leather</li>
            <li>Steering Wheel - Multifunctional</li>
            <li>Tinted Glass - Rear Windows</li>
            <li>Traffic sign recognition</li>
            <li>Upholstery - Artificial Leather</li>
          </ul>
          <h1 className='font-semibold text-lg'>Accessories</h1>
          <ul className='list-disc flex flex-col px-10'>
            <li>Charging cable 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
