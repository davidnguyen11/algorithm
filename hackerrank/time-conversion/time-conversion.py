# https://www.hackerrank.com/challenges/time-conversion/problem
#!/bin/python

import sys

mapping_time = {
    'PM': {
        '01': '13',
        '02': '14',
        '03': '15',
        '04': '16',
        '05': '17',
        '06': '18',
        '07': '19',
        '08': '20',
        '09': '21',
        '10': '22',
        '11': '23',
        '12': '12',
    },
    'AM': {
        '12': '00'
    }
}

def timeConversion(s):
    times = s.split(':')
    hour = times[0]
    minute = times[1]
    second = times[2][:2]
    period_type = times[2][2:]
    data = mapping_time.get(period_type, None)
    if data:
        hour = data.get(hour, hour)

    return ':'.join([hour, minute, second])


s = raw_input().strip()
result = timeConversion(s)
print(result)
