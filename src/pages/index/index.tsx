import { useState } from "react";
import { View } from "@tarojs/components";

import "./index.scss";

const Index = () => {
  const [flag] = useState(true);
  const className = "bg-[#123456]";
  return (
    <>
      <View className='[&_.u-count-down\_\_text]:!text-red-400'>
        <View>1</View>
        <View>2</View>
        <View></View>
        <View></View>
        <View>
          <View className='u-count-down__text'>taro-react-tailwind-vscode-template</View>
        </View>
      </View>
      <View className="after:content-['presudo'] after:ml-0.5 after:text-red-500"></View>
      <View className="after:content-['我是伪元素'] after:ml-0.5 after:text-red-500"></View>

      <View
        className='bg-gray-100 dark:bg-zinc-800 h-10 w-10'
        hoverClass='bg-red-500 dark:bg-green-500'
      ></View>

      <View className={className}>className</View>
      <View className={flag ? "p-[20px] -mt-2 mb-[-20px] " : ""}>
        1111
      </View>
      <View className='test'>test</View>
    </>
  );
};

export default Index;
