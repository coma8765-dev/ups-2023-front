import MainLayout from "../layouts/MainLayout";
import Image from "next/image";
import CuberRed from "../assets/img/cyberRed.png";
import DownloadApp from "../assets/img/app.png";
import KeyboardSwitcher from "../components/KeyboardSwitcher";
import InputField from "../components/InputField";
import CheckboxField from "../components/CheckboxField";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/signup").then();
  }, [router]);

  return (
    <MainLayout>
      <div className="max-content translate-y-[10%]">
        <div>
          <Image className="block" priority src={CuberRed} alt={"Icon"} />
        </div>
        <div className="text-grey mb-2.5 mt-9">
          Форма входа пользователя киберспортивного клуба
        </div>
        <div className="flex flex-wrap gap-x-14">
          <InputField placeholder="Логин" />
          <InputField placeholder="Пароль" password />
        </div>
        <div>
          <CheckboxField text="Согласен(а) с правилами посещения комплекса клуба" />
          <CheckboxField text="Согласен(а) с политикой обработки персональных данных" />
        </div>
        <div className="flex flex-row wrap justify-between mb-16">
          <Button className="bg-aeroport bg-button object-none text-white">
            Вход
          </Button>
          <Button
            onClick={() => router.push("/signup", undefined, { shallow: true })}
            className="text-aeroport"
          >
            Регистрация
          </Button>
        </div>
        <Image src={DownloadApp} alt={"Download app"} />
      </div>
      <KeyboardSwitcher className="absolute left-12 bottom-3" />
    </MainLayout>
  );
}
