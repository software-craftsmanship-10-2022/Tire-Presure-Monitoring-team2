export interface IBaseSensor {
	popNextPressurePsiValue(): number;
}
const MIN_TRESHOLD = 17;
const MAX_TRESHOLD = 21;
export default class Alarm {

	private highPressureThreshold: number;
	private lowPressureThreshold: number;
	private sensor: IBaseSensor;
	private alarmOn: boolean;

	constructor(sensor: IBaseSensor, lowPressureThreshold: number = MIN_TRESHOLD, highPressureThreshold: number = MAX_TRESHOLD) {
		
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
