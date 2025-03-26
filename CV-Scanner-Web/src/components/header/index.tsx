// import Button from "../button";
import ThemeToogleButton from "../themeToogle";

export default function Header() {
    return <div className="bg-slate-300 dark:bg-gray-700 fixed w-full z-20 top-0 start-0 border-b border-gray-600 py-2 px-4 flex gap-2 justify-end">
      <ThemeToogleButton />
      {/* <Button
        variant="outlined-purple"
        text="Log in"
      />
      <Button 
        variant="solid-purple"
        text="Sign in"
      /> */}
    </div>
}