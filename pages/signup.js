import MainLayout from "../layouts/MainLayout";
import Image from "next/image";
import CuberRed from "../assets/img/cyberRed.png";
import DownloadApp from "../assets/img/app.png";
import KeyboardSwitcher from "../components/KeyboardSwitcher";
import InputField from "../components/InputField";
import CheckboxField from "../components/CheckboxField";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    router.prefetch("/signin").then();
  }, [router]);

  return (
    <MainLayout>
      <div className="max-content mt-8 lg:mt-[5%] 4xl:mt-[10%]">
        <Image
          className="object-none object-center h-[158px] w-[377px]"
          priority
          src={CuberRed}
          alt={"Icon"} />
        <div className="text-grey mb-2.5 mt-9">
          Форма регистрации нового пользователя киберспортивного клуба
        </div>
        <div className="flex flex-wrap gap-x-14 max-w-[701px]">
          <InputField placeholder="Логин" />
          <InputField placeholder="ФИО" />
          <InputField placeholder="Пароль" password />
          <InputField placeholder="Подтверждение пароля" password />
          <InputField placeholder="8 (777) 777 - 77 - 77" />
          <InputField placeholder="Email" />
        </div>
        <div>
          <CheckboxField text="Согласен(а) с правилами посещения комплекса клуба" />
          <CheckboxField text="Согласен(а) с политикой обработки персональных данных" />
        </div>
        <div className="flex flex-row flex-wrap justify-between mb-16">
          <Button
            onClick={() => router.push("/signin", undefined, { shallow: true })}
            className="bg-aeroport bg-button object-none text-white"
          >
            Вход
          </Button>
          <Button className="text-aeroport">Регистрация</Button>
        </div>
        <Image src={DownloadApp} alt={"Download app"} />
      </div>
      <KeyboardSwitcher
        className={
          "absolute left-12 bottom-3" + (height < 1000 ? " hidden" : "")
        } />
    </MainLayout>
  );
}
