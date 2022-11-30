import { expect } from 'chai';
import 'mocha';
import Alarm from '../tire-pressure-monitoring-system/alarm';
import {IBaseSensor} from '../tire-pressure-monitoring-system/IBaseSensor';

function sensorGenerator(enableAlarm: boolean): IBaseSensor {
	class dummySensor implements IBaseSensor{
		isSensorOn(): boolean {
			return enableAlarm;
		}
	}
	return new dummySensor();
}

describe('Tyre Pressure Monitoring System', () => {

	it('Should not turn alarm by default', () => {
		const alarm = new Alarm(sensorGenerator(false));
		expect(alarm.isAlarmOn()).eql(false);
	});

	it('Should turn alarm on when sensor is enabled', () => {
		const alarm = new Alarm(sensorGenerator(true));
		alarm.check();
		expect(alarm.isAlarmOn()).eql(true);
	});

	it('Should turn alarm off when sensor is not enabled', () => {
		const alarm = new Alarm(sensorGenerator(false));
		alarm.check();
		expect(alarm.isAlarmOn()).eql(false);
	});
});
