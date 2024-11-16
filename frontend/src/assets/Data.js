const currentDate = new Date().toISOString().split("T")[0];

export const dataList = [
{
  "_id": {
    "$oid": "64df1a0e7150dc42c5f4d7d9"
  },
  "createdAt": {
    "$date": "2023-08-16T00:15:00.000Z"
  },
  "serialNo": "43200082",
  "clientID": {
    "$oid": "64ba1aedf4bfdb003572d56a"
  },
  "deviceMapID": {
    "$oid": "64dcbc2ad4416f36f5acaa89"
  },
  "devices": [
    {
      "$oid": "64dcb2eff4b9f70034e50a7c"
    }
  ],
  "total_kwh": 4.849999999998545,
  "updatedAt": {
    "$date": "2023-08-23T12:47:30.188Z"
  },
  "ac_run_hrs": 1.4788888888888896,
  "ac_fan_hrs": 0,
  "algo_status": 0,
  "billing_ammount": 40.25,
  "cost_reduction": 0,
  "energy_savings": {
    "savings_percent": 0,
    "ref_kwh": 0,
    "us_meter": 0,
    "us_calc": 0,
    "inv_factor": 0
  },
  "mitigated_co2": 0,
  "weather": {
    "max_temp": 28.9,
    "min_temp": 27.2
  }
},
{
  "_id": {
    "$oid": "64df1a0e7150dc42c5f4d98b"
  },
  "createdAt": {
    "$date": "2023-08-17T00:15:00.000Z"
  },
  "serialNo": "43200082",
  "clientID": {
    "$oid": "64ba1aedf4bfdb003572d56a"
  },
  "deviceMapID": {
    "$oid": "64dcbc2ad4416f36f5acaa89"
  },
  "devices": [
    {
      "$oid": "64dcb2eff4b9f70034e50a7c"
    }
  ],
  "total_kwh": 4.630000000001019,
  "updatedAt": {
    "$date": "2023-08-23T12:47:30.572Z"
  },
  "ac_run_hrs": 1.1166666666666671,
  "ac_fan_hrs": 0,
  "algo_status": 0,
  "billing_ammount": 38.43,
  "cost_reduction": 0,
  "energy_savings": {
    "savings_percent": 0,
    "ref_kwh": 0,
    "us_meter": 0,
    "us_calc": 0,
    "inv_factor": 0
  },
  "mitigated_co2": 0,
  "weather": {
    "max_temp": 29,
    "min_temp": 27.3
  }
},

];
