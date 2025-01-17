export const demoJobsList = {
  '0xe7B0d70cB349Eb0fF90DdD8d1509f761B2c2af76': {
    1678706056692: {
      id: '1678706056692',
      name: 'Market-X Demonstrator',
      createdAt: 1678706056692,
      chainId: 100,
      accountId: '0xe7B0d70cB349Eb0fF90DdD8d1509f761B2c2af76',
      type: 'multi',
      dataDIDs: [
        'did:op:dd456754dc659ef111cc5fa87662cda1a67ca390c3f86fee4d5592ecb3bbffd5',
        'did:op:f167ec391e3eb439f7296a8b834e580c06a74becb36b0858adb51cf6cb30d267',
        'did:op:bd2d41775c5041361d899f30734920af6383c3ca5838d06fa4649cba9c94192e',
      ],
      algoConfig: {
        id: 'part-matching',
        name: 'Part Matching',
        assets: {
          training: 'did:op:ca69686d534777405c8cb0a4437bca408a3f8bd1e479d429beed64b9f932b69f',
          aggregation: 'did:op:adb67df12b41a4089e0d3f4933bab5254bb905657b92b35bcd1cbcefc836fee5',
          emptyDataset: 'did:op:f72ac5c25f90b39ed14c4daa048606ca2847171965a60b0131bf1184cf9aaf49',
        },
        hasParameters: true,
      },
      localTraining: {
        'did:op:dd456754dc659ef111cc5fa87662cda1a67ca390c3f86fee4d5592ecb3bbffd5': {
          computeJob: {
            agreementId: '0x1a194d408f261444da9540cde098898e70d812ba607342f7e0b91c0ba3d90212',
            jobId: '72a0e46a3bbd4e6b8b22c9316fc57d67',
            owner: '0xe7B0d70cB349Eb0fF90DdD8d1509f761B2c2af76',
            status: 70,
            statusText: 'Job finished',
            dateCreated: '1678706090.78573',
            dateFinished: '1678706334.5347',
            results: [
              { filename: 'model', filesize: 544, type: 'output' },
              { filename: 'algorithm.log', filesize: 1694, type: 'algorithmLog' },
              { filename: 'configure.log', filesize: 2431, type: 'configrationLog' },
              { filename: 'publish.log', filesize: 0, type: 'publishLog' },
            ],
            stopreq: 0,
            removed: 0,
            algoDID: 'did:op:ca69686d534777405c8cb0a4437bca408a3f8bd1e479d429beed64b9f932b69f',
            inputDID: ['did:op:dd456754dc659ef111cc5fa87662cda1a67ca390c3f86fee4d5592ecb3bbffd5'],
          },
          seed: 1515562004,
        },
        'did:op:f167ec391e3eb439f7296a8b834e580c06a74becb36b0858adb51cf6cb30d267': {
          computeJob: {
            agreementId: '0x97f095d22f82cf75dfe6a99b927b4500f30cd1146d1fbc85aa4d3bb724c8a708',
            jobId: '480ccb5cc8e74af4859974cf9ce9d46d',
            owner: '0xe7B0d70cB349Eb0fF90DdD8d1509f761B2c2af76',
            status: 70,
            statusText: 'Job finished',
            dateCreated: '1678706138.04835',
            dateFinished: '1678706406.03008',
            results: [
              { filename: 'model', filesize: 545, type: 'output' },
              { filename: 'algorithm.log', filesize: 1694, type: 'algorithmLog' },
              { filename: 'configure.log', filesize: 2431, type: 'configrationLog' },
              { filename: 'publish.log', filesize: 0, type: 'publishLog' },
            ],
            stopreq: 0,
            removed: 0,
            algoDID: 'did:op:ca69686d534777405c8cb0a4437bca408a3f8bd1e479d429beed64b9f932b69f',
            inputDID: ['did:op:f167ec391e3eb439f7296a8b834e580c06a74becb36b0858adb51cf6cb30d267'],
          },
          seed: 3125740967,
        },
        'did:op:bd2d41775c5041361d899f30734920af6383c3ca5838d06fa4649cba9c94192e': {
          computeJob: {
            agreementId: '0xa55f5f67ac3694965160650cfbdb14349fabbe26f281262959a1e7cae94c6048',
            jobId: 'c5594cf81eb24fb29f0b944d4ebc4fb9',
            owner: '0xe7B0d70cB349Eb0fF90DdD8d1509f761B2c2af76',
            status: 70,
            statusText: 'Job finished',
            dateCreated: '1678706177.7879',
            dateFinished: '1678706319.34976',
            results: [
              { filename: 'model', filesize: 542, type: 'output' },
              { filename: 'algorithm.log', filesize: 1694, type: 'algorithmLog' },
              { filename: 'configure.log', filesize: 2431, type: 'configrationLog' },
              { filename: 'publish.log', filesize: 0, type: 'publishLog' },
            ],
            stopreq: 0,
            removed: 0,
            algoDID: 'did:op:ca69686d534777405c8cb0a4437bca408a3f8bd1e479d429beed64b9f932b69f',
            inputDID: ['did:op:bd2d41775c5041361d899f30734920af6383c3ca5838d06fa4649cba9c94192e'],
          },
          seed: 1901008162,
        },
      },
      aggregation: {
        1678706437665: {
          computeJob: {
            agreementId: '0xc3782463f103b0855b05ecec402990c17505f2f70f09d2a32868b34db3da206d',
            jobId: '8dc0a152fff14f538533804fe2de78df',
            owner: '0xe7B0d70cB349Eb0fF90DdD8d1509f761B2c2af76',
            status: 70,
            statusText: 'Job finished',
            dateCreated: '1678706499.86931',
            dateFinished: '1678706683.09074',
            results: [
              { filename: 'model.pdf', filesize: 605115, type: 'output' },
              { filename: 'algorithm.log', filesize: 4847, type: 'algorithmLog' },
              { filename: 'configure.log', filesize: 2431, type: 'configrationLog' },
              { filename: 'publish.log', filesize: 0, type: 'publishLog' },
            ],
            stopreq: 0,
            removed: 0,
            algoDID: 'did:op:adb67df12b41a4089e0d3f4933bab5254bb905657b92b35bcd1cbcefc836fee5',
            inputDID: ['did:op:f72ac5c25f90b39ed14c4daa048606ca2847171965a60b0131bf1184cf9aaf49'],
          },
          localTrainings: [
            'did:op:dd456754dc659ef111cc5fa87662cda1a67ca390c3f86fee4d5592ecb3bbffd5',
            'did:op:f167ec391e3eb439f7296a8b834e580c06a74becb36b0858adb51cf6cb30d267',
            'did:op:bd2d41775c5041361d899f30734920af6383c3ca5838d06fa4649cba9c94192e',
          ],
        },
      },
    },
  },
};
