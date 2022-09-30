const SDG_GAIN_CORRELATIONS = [
  [
    -Infinity,
    0.73716781,
    -0.98085788,
    -0.01144696,
    0.57257673,
    -0.90983805,
    0.71043322,
    0.68579243,
    0.17856733,
    -0.83611367,
    0.73696422,
    -0.94694144,
    -0.2886715,
    0.41325758,
    0.65724329,
    0.70449937,
    -0.52476757,
  ],
  [
    0.73716781,
    -Infinity,
    0.38604509,
    -0.78716036,
    0.83264208,
    0.16254651,
    -0.05334342,
    0.4160746,
    0.38402329,
    0.26224418,
    -0.03203928,
    -0.34543427,
    -0.77214451,
    -0.20553076,
    -0.38329881,
    0.75618088,
    -0.49250578,
  ],
  [
    -0.98085788,
    0.38604509,
    -Infinity,
    -0.53023385,
    -0.8965012,
    -0.55082313,
    -0.88885907,
    -0.7517106,
    0.7992125,
    0.15849807,
    -0.23420145,
    0.16203543,
    -0.27401574,
    0.10134854,
    0.07365716,
    0.9590969,
    -0.83592073,
  ],
  [
    -0.01144696,
    -0.78716036,
    -0.53023385,
    -Infinity,
    0.86738632,
    -0.16114135,
    -0.04067712,
    -0.23759406,
    0.1600971,
    0.04105636,
    -0.45866643,
    0.74287481,
    0.997544,
    -0.22599662,
    -0.66257311,
    0.52783846,
    0.94615912,
  ],
  [
    0.57257673,
    0.83264208,
    -0.8965012,
    0.86738632,
    -Infinity,
    0.50690102,
    -0.26489322,
    -0.85035501,
    0.60158264,
    -0.03989042,
    0.46198381,
    0.74065478,
    -0.17030091,
    0.34481149,
    -0.41551192,
    0.3806587,
    0.62362595,
  ],
  [
    -0.90983805,
    0.16254651,
    -0.55082313,
    -0.16114135,
    0.50690102,
    -Infinity,
    -0.79454118,
    -0.14832965,
    -0.11907191,
    -0.63289425,
    0.08876858,
    0.8131548,
    -0.84629207,
    0.17645283,
    0.99437075,
    0.80085247,
    0.50335978,
  ],
  [
    0.71043322,
    -0.05334342,
    -0.88885907,
    -0.04067712,
    -0.26489322,
    -0.79454118,
    -Infinity,
    0.2257582,
    0.12668557,
    -0.95086729,
    -0.95683487,
    0.28357136,
    -0.26137836,
    -0.07429062,
    0.29046848,
    0.81111884,
    0.5055359,
  ],
  [
    0.68579243,
    0.4160746,
    -0.7517106,
    -0.23759406,
    -0.85035501,
    -0.14832965,
    0.2257582,
    -Infinity,
    -0.76846558,
    -0.05296864,
    0.10497826,
    -0.68372255,
    -0.5993337,
    -0.41765642,
    0.11996232,
    0.11316373,
    -0.25669745,
  ],
  [
    0.17856733,
    0.38402329,
    0.7992125,
    0.1600971,
    0.60158264,
    -0.11907191,
    0.12668557,
    -0.76846558,
    -Infinity,
    0.04616319,
    0.88793645,
    -0.07920412,
    -0.03847303,
    0.35397288,
    -0.78274999,
    0.84304455,
    -0.77273963,
  ],
  [
    -0.83611367,
    0.26224418,
    0.15849807,
    0.04105636,
    -0.03989042,
    -0.63289425,
    -0.95086729,
    -0.05296864,
    0.04616319,
    -Infinity,
    0.9020666,
    -0.64928915,
    -0.17746192,
    0.2121116,
    -0.35907481,
    0.10670143,
    -0.08433111,
  ],
  [
    0.73696422,
    -0.03203928,
    -0.23420145,
    -0.45866643,
    0.46198381,
    0.08876858,
    -0.95683487,
    0.10497826,
    0.88793645,
    0.9020666,
    -Infinity,
    0.56529323,
    -0.54113424,
    -0.10880558,
    -0.36637756,
    0.42669893,
    -0.14799312,
  ],
  [
    -0.94694144,
    -0.34543427,
    0.16203543,
    0.74287481,
    0.74065478,
    0.8131548,
    0.28357136,
    -0.68372255,
    -0.07920412,
    -0.64928915,
    0.56529323,
    -Infinity,
    -0.58089251,
    -0.54628024,
    -0.13792732,
    -0.05083143,
    -0.86003472,
  ],
  [
    -0.2886715,
    -0.77214451,
    -0.27401574,
    0.997544,
    -0.17030091,
    -0.84629207,
    -0.26137836,
    -0.5993337,
    -0.03847303,
    -0.17746192,
    -0.54113424,
    -0.58089251,
    -Infinity,
    0.29310323,
    -0.75341193,
    -0.45005865,
    0.35640526,
  ],
  [
    0.41325758,
    -0.20553076,
    0.10134854,
    -0.22599662,
    0.34481149,
    0.17645283,
    -0.07429062,
    -0.41765642,
    0.35397288,
    0.2121116,
    -0.10880558,
    -0.54628024,
    0.29310323,
    -Infinity,
    -0.77878952,
    -0.01236657,
    -0.57392396,
  ],
  [
    0.65724329,
    -0.38329881,
    0.07365716,
    -0.66257311,
    -0.41551192,
    0.99437075,
    0.29046848,
    0.11996232,
    -0.78274999,
    -0.35907481,
    -0.36637756,
    -0.13792732,
    -0.75341193,
    -0.77878952,
    -Infinity,
    -0.95948628,
    -0.37132332,
  ],
  [
    0.70449937,
    0.75618088,
    0.9590969,
    0.52783846,
    0.3806587,
    0.80085247,
    0.81111884,
    0.11316373,
    0.84304455,
    0.10670143,
    0.42669893,
    -0.05083143,
    -0.45005865,
    -0.01236657,
    -0.95948628,
    -Infinity,
    -0.82567568,
  ],
  [
    -0.52476757,
    -0.49250578,
    -0.83592073,
    0.94615912,
    0.62362595,
    0.50335978,
    0.5055359,
    -0.25669745,
    -0.77273963,
    -0.08433111,
    -0.14799312,
    -0.86003472,
    0.35640526,
    -0.57392396,
    -0.37132332,
    -0.82567568,
    -Infinity,
  ],
];

export function extrapolateSDGGains(originalSDGs: number[]): number[] {
  var SDGs: number[] = Object.assign([], originalSDGs);

  var correlationValues: number[] = Object.assign(
    [],
    SDG_GAIN_CORRELATIONS[SDGs.shift() ?? 0]
  );

  for (var SDG of SDGs) {
    for (var correlationValToAdd of SDG_GAIN_CORRELATIONS[SDG])
      correlationValues[SDG] += correlationValToAdd;
  }

  var results: number[] = [];

  for (var i of [0, 1, 2]) {
    results[i] = correlationValues.indexOf(Math.max(...correlationValues));
    correlationValues[results[i]] = -Infinity;
  }
  return results.sort((n1, n2) => n1 - n2);
}
