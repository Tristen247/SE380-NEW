import { useState, useEffect, useRef } from "react";
import { Subscription } from "expo-battery";
import * as Battery from "expo-battery";

export const useBatteryListener = () => {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const subscription = useRef<null | Subscription>(null);

  const _subscribe = async () => {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    setBatteryLevel(batteryLevel);

    subscription.current = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel);
      console.log("batteryLevel changed!", batteryLevel);
    });
  };

  const _unsubscribe = () => {
    subscription.current && subscription.current.remove();
    subscription.current = null;
  };
  
  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return batteryLevel;
};