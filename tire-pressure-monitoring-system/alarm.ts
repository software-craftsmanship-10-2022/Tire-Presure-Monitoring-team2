import Sensor from './sensor';

export interface IBaseSensor {
	popNextPressurePsiValue(): number;
}

export default class Alarm {
	private highPressureThreshold: number;
	private lowPressureThreshold: number;

	private sensor: IBaseSensor;
	private alarmOn: boolean;

	constructor(sensor: IBaseSensor, lowPressureThreshold: number = 17, highPressureThreshold: number = 21) {
		
		this.lowPressureThreshold = lowPressureThreshold;
		this.highPressureThreshold = highPressureThreshold;
		this.sensor = sensor;
		this.alarmOn = false;
	}

	public check() {
		const psiPressureValue = this.sensor.popNextPressurePsiValue();

		if (psiPressureValue < this.lowPressureThreshold || this.highPressureThreshold < psiPressureValue) {
			this.alarmOn = true;
		}	
	}

	public isAlarmOn() {
		return this.alarmOn;
	}

}
