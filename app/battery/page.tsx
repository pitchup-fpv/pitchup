"use client"

import { Calculation } from "@/components/Calculators/Calculation";
import { CalculatorDisclaimer } from "@/components/Calculators/CalculatorDisclaimer";
import { CalculatorInput } from "@/components/Calculators/CalculatorInput";
import useHasMounted from "@/src/hooks/useHasMounted";
import { useChargerCalcStore } from "@/src/stores/chargerCalc";
import { Box, Input, Link, Typography, TypographySystem } from "@mui/joy"
import { FC } from "react";

const ChargerWattsInput = () => {
    const { chargerWatts, setChargerWatts } = useChargerCalcStore(state => state);
    return CalculatorInput({ 
        unit:"W",
        label:"Charger Watts",
        value:chargerWatts,
        setter:setChargerWatts,
    });
}

const BatteryMahInput = () => {
    const { batteryMah, setBatteryMah } = useChargerCalcStore(state => state);
    return <CalculatorInput unit="mAh"
        label="Battery mAh"
        value={batteryMah}
        setter={setBatteryMah}
    />;
}

const CellCountInput = () => {
    const { cellCount, setCellCount } = useChargerCalcStore(state => state);
    return <CalculatorInput unit="Cells"
        label="Cell Count"
        value={cellCount}
        setter={setCellCount}
    />;
}

type BatteryAmpsCalculationProps = {
    batteryMah: number
    batteryAmps: number
}

const BatteryAmpsCalculation: FC<BatteryAmpsCalculationProps> = ({ batteryMah, batteryAmps }) => {
    return <Calculation
        label="Battery Amps"
        equation={`${batteryMah}mAh / 1000`}
        value={batteryAmps}
        unit="A"
    />;
}

type FullyChargedVoltageCalculationProps = {
    cellCount: number
    fullyChargedVoltage: number
}

const FullyChargedVoltageCalculation: FC<FullyChargedVoltageCalculationProps> = ({ cellCount, fullyChargedVoltage }) => {
    return <Calculation
        label="Fully Charged Voltage"
        equation={`4.2V * ${cellCount} cells`}
        value={fullyChargedVoltage}
        unit="V"
    />;
}

type MaxChargeRateCalculationProps = {
    chargerWatts: number
    fullyChargedVoltage: number
    maxChargeRate: number
}

const MaxChargeRateCalculation: FC<MaxChargeRateCalculationProps> = ({ chargerWatts, fullyChargedVoltage, maxChargeRate }) => {
    return <Calculation
        label="Max Charge Rate"
        equation={`${chargerWatts}W / ${fullyChargedVoltage}V`}
        value={maxChargeRate}
        unit="C"
    />;
}

type MaxChargeAmpsCalculationProps = {
    maxChargeRate: number
    batteryAmps: number
    maxChargeAmps: number
}

const MaxChargeAmpsCalculation: FC<MaxChargeAmpsCalculationProps> = ({ maxChargeRate, batteryAmps, maxChargeAmps }) => {
    return <Calculation
        label="Max Charge Amps"
        equation={`${maxChargeRate}C * ${batteryAmps}A`}
        value={maxChargeAmps}
        unit="A"
    />;
}

type ChargeAmpsCalculationProps = {
    chargeAmps: number[]
    maxChargeRate: number
    trueMaxChargeRate: number
}

const ChargeAmpsCalculation: FC<ChargeAmpsCalculationProps> = ({ chargeAmps, maxChargeRate, trueMaxChargeRate }) => {
    return <Box>
        <Box display="flex" flexDirection="row" width="100%" justifyContent="space-evenly">
            {chargeAmps.map((chargeAmp, i) =>
                <Box key={i} display="flex" flexDirection="column" alignItems="center">
                    <Box>{i + 1}C</Box>
                    <Box color={i <= maxChargeRate ? "inherit" : "gray"}><b>{chargeAmp}A</b></Box>
                </Box>
            )}
        </Box>
        <Box marginTop="1em" display="flex" justifyContent="center">{trueMaxChargeRate > 5 && <i>Max charge-speed capped at 5C.</i>}</Box>
    </Box>;
}

const Disclaimer = () => {
    return <CalculatorDisclaimer>
        <Box>These calculations are estimates and may not be accurate.</Box>
        <Box><b>NEVER</b> charge at a rate/amperage beyond the battery`s listed rating!</Box>
    </CalculatorDisclaimer>;
}

type DischargeVoltageCalculationProps = {
    cellCount: number
    dischargeVoltage: number
}

const DischargeVoltageCalculation: FC<DischargeVoltageCalculationProps> = ({ cellCount, dischargeVoltage }) => {
    return <Calculation
        label="Discharge Voltage"
        equation={`3.7V * ${cellCount} cells`}
        value={dischargeVoltage}
        unit="V"
    />;
}

type NominalVoltageCalculationProps = {
    cellCount: number
    nominalVoltage: number
}

const NominalVoltageCalculation: FC<NominalVoltageCalculationProps> = ({ cellCount, nominalVoltage }) => {
    return <Calculation
        label="Nominal Voltage"
        equation={`3.7V * ${cellCount} cells`}
        value={nominalVoltage}
        unit="V"
    />;
}

type OverchargedVoltageCalculationProps = {
    cellCount: number
    overchargedVoltage: number
}

const OverchargedVoltageCalculation: FC<OverchargedVoltageCalculationProps> = ({ cellCount, overchargedVoltage }) => {
    return <Calculation
        label="Overcharged Voltage"
        equation={`4.3V * ${cellCount} cells`}
        value={overchargedVoltage}
        unit="V"
    />;
}

type StorageVoltageCalculationProps = {
    cellCount: number
    storageVoltage: number
}

const Title = (props: { title: string, url: string, size?: keyof TypographySystem }) => {
    return <Typography level={props.size ?? 'h1'}>
        <Link href={props.url}>
            {props.title}
        </Link>
    </Typography>
}

const StorageVoltageCalculation: FC<StorageVoltageCalculationProps> = ({ cellCount, storageVoltage }) => {
    return <Calculation
        label="Storage Voltage"
        equation={`3.8V * ${cellCount} cells`}
        value={storageVoltage}
        unit="V"
    />;
}

const BatteryStatsCalculator = () => {
    let {
        batteryMah,
        cellCount,
        chargerWatts,
    } = useChargerCalcStore(state => state);

    const mounted = useHasMounted();

    if (!mounted) {
        batteryMah = 0;
        cellCount = 0;
        chargerWatts = 0;
    }

    const nominalVoltage = 3.7 * cellCount;
    const fullyChargedVoltage = 4.2 * cellCount;
    const overchargedVoltage = 4.3 * cellCount;
    const storageVoltage = 3.8 * cellCount;

    const batteryAmps = batteryMah / 1000.0;
    const trueMaxChargeRate = Math.floor(chargerWatts / fullyChargedVoltage);
    const maxChargeRate = Math.min(5, trueMaxChargeRate);
    const chargeAmps = [] as number[];
    for (let i = 1; i <= maxChargeRate; i++) {
        const maxChargeAmps = Math.round(i * batteryAmps * 10) / 10.0;
        chargeAmps.push(maxChargeAmps);
    }


    return <Box display="flex" flexDirection="column" alignItems="stretch">
        <Title title="Battery Stats" url="/battery" />
        <Box width="100%" display="flex" justifyContent="center">
            <Box display="grid" style={{ alignItems: "center", width: "80%", gridTemplateColumns: "1fr auto auto", gridGap: "1em" }}>
                <BatteryMahInput />
                <CellCountInput />
            </Box>
        </Box>
        <Box height="3em" />
        <Box width="100%" display="flex" justifyContent="center">
            <Box display="grid" style={{ width: "80%", gridTemplateColumns: "1fr auto auto", gridGap: "1em" }}>
                <StorageVoltageCalculation cellCount={cellCount} storageVoltage={storageVoltage} />
                <NominalVoltageCalculation cellCount={cellCount} nominalVoltage={nominalVoltage} />
                <FullyChargedVoltageCalculation cellCount={cellCount} fullyChargedVoltage={fullyChargedVoltage} />
                <OverchargedVoltageCalculation cellCount={cellCount} overchargedVoltage={overchargedVoltage} />
            </Box>
        </Box>
        <Box height="3em" />
        <Title title="Charging Speed" url="/battery" size="h2" />
        <Box width="100%" display="flex" justifyContent="center">
            <Box display="grid" style={{ alignItems: "center", width: "80%", gridTemplateColumns: "1fr auto auto", gridGap: "1em" }}>
                <ChargerWattsInput />
            </Box>
        </Box>
        <Box height="3em" />
        <Box width="100%" display="flex" justifyContent="center">
            <Box display="grid" style={{ width: "80%", gridTemplateColumns: "1fr auto auto", gridGap: "1em" }}>
                <BatteryAmpsCalculation batteryMah={batteryMah} batteryAmps={batteryAmps} />
                <FullyChargedVoltageCalculation cellCount={cellCount} fullyChargedVoltage={fullyChargedVoltage} />
                <MaxChargeRateCalculation chargerWatts={chargerWatts} fullyChargedVoltage={fullyChargedVoltage} maxChargeRate={maxChargeRate} />
                <MaxChargeAmpsCalculation maxChargeRate={maxChargeRate} batteryAmps={batteryAmps} maxChargeAmps={maxChargeRate * batteryAmps} />
            </Box>
        </Box>
        <Box height="3em" />
        <ChargeAmpsCalculation chargeAmps={chargeAmps} maxChargeRate={maxChargeRate} trueMaxChargeRate={trueMaxChargeRate} />
        <Box height="3em" />
        <Disclaimer />
    </Box>
}

export default BatteryStatsCalculator