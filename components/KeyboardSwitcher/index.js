import Image from "next/image";
import RUCountry from "../../assets/img/russia.png";
import USCountry from "../../assets/img/united-states.png";
import HotkeySwitchLang from "../../assets/img/hotkey-switch-text.png";

const KeyboardSwitcher = ({ className = "", ...props }) => {
  return (
    <div className={className + " font-normal"} {...props}>
      <div className="text-white text-2xl">Раскладка клавиатуры</div>
      <div className="grid grid-cols-2 w-72 my-1">
        <Image className="block" src={RUCountry} alt={"Russia"} />
        <Image className="block" src={USCountry} alt={"United States"} />
      </div>
      <div className="flex flex-row justify-around text-lg">
        <div className="w-80 text-grey2">
          *Для смены раскладки ввода
          <br />
          языка нажмите комбинацию клавиш
        </div>
        <Image
          className="block object-none ml-2"
          src={HotkeySwitchLang}
          alt={"Use alt+shift"} />
      </div>
    </div>
  );
};

export default KeyboardSwitcher;
