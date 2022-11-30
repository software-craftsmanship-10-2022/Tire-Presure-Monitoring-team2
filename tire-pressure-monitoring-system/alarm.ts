import {IBaseSensor} from "./IBaseSensor";

export default class Alarm {
	private sensor: IBaseSensor;
	private alarmOn: boolean;

	constructor(sensor: IBaseSensor) {
		this.sensor = sensor;
		this.alarmOn = false;
	}

	public check() {
		if (this.sensor.isSensorOn()) {
			this.alarmOn = true;
		}	
	}

	public isAlarmOn() {
		return this.alarmOn;
	}

}
