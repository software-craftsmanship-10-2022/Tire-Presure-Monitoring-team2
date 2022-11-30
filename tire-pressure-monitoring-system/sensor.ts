// The reading of the pressure value from the sensor is simulated in this implementation.
// Because the focus of the exercise is on the other class.

import { IBaseSensor } from "./alarm";

export default class Sensor implements IBaseSensor{

	private highPressureThreshold;
	private lowPressureThreshold;

	public constructor(low: number, high: number) {
		this.highPressureThreshold = high;
		this.lowPressureThreshold = low;
	}

	public popNextPressurePsiValue(): number {
		const pressureTelemetryValue = this.samplePressure();

		return this.offset() + pressureTelemetryValue;
	}

	private samplePressure() {
		// placeholder implementation that simulate a real sensor in a real tire
		const pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
		return pressureTelemetryValue;
	}

	public isSensorOn(): boolean {
		const psiPressureValue = this.popNextPressurePsiValue();
		return psiPressureValue < this.lowPressureThreshold || this.highPressureThreshold < psiPressureValue;
	}

	private offset() { return 16; }

}
