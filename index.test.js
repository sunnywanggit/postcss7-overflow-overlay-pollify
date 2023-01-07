const postcss = require('postcss');

const plugin = require('./');

const css = String.raw;

async function testEqualResult(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it('with overflow: overlay', async () => {
  await testEqualResult(
    css`
      div {
        overflow: overlay;
      }
    `,
    css`
      div {
        overflow: overlay;
        overflow: auto;
      }
    `,
    {}
  );
});

it('with double overflow: overlay', async () => {
  await testEqualResult(
    css`
      div {
        overflow: overlay;
        overflow: overlay;
      }
    `,
    css`
      div {
        overflow: overlay;
        overflow: auto;
        overflow: overlay;
      }
    `,
    {}
  );
});


it('with overflow: overlay !important', async () => {
  await testEqualResult(
    css`
      div {
        overflow: overlay !important;
      }
    `,
    css`
      div {
        overflow: overlay !important;
        overflow: auto !important;
      }
    `,
    {}
  );
});


// it('skip overflow: auto', async () => {
//   await testEqualResult(
//     css`
//       div {
//         /** overflow: auto; **/
//         overflow: overlay;
//       }
//     `,
//     css`
//       div {
//         overflow: overlay;
//       }
//     `,
//     {}
//   );
// });


it('with overflow-x: overlay', async () => {
  await testEqualResult(
    css`
      div {
        overflow-x: overlay;
      }
    `,
    css`
      div {
        overflow-x: overlay;
        overflow-x: auto;
      }
    `,
    {}
  );
});


it('with overflow-y: overlay', async () => {
  await testEqualResult(
    css`
      div {
        overflow-y: overlay;
      }
    `,
    css`
      div {
        overflow-y: overlay;
        overflow-y: auto;
      }
    `,
    {}
  );
});

it('with overflow: scroll', async () => {
  await testEqualResult(
    css`
      div {
        overflow: scroll;
      }
    `,
    css`
      div {
        overflow: scroll;
      }
    `,
    {}
  );
});

it('with overflow: scroll and overlay', async () => {
  await testEqualResult(
    css`
      div {
        overflow: scroll;
        overflow: overlay;
      }
    `,
    css`
      div {
        overflow: scroll;
        overflow: overlay;
        overflow: auto;
      }
    `,
    {}
  );
});

it('with overflow: overlay and scroll', async () => {
  await testEqualResult(
    css`
      div {
        overflow: overlay;
        overflow: scroll;
      }
    `,
    css`
      div {
        overflow: overlay;
        overflow: auto;
        overflow: scroll;
      }
    `,
    {}
  );
});

it('with overflow: hidden scroll', async () => {
  await testEqualResult(
    css`
      div {
        overflow: hidden scroll;
      }
    `,
    css`
      div {
        overflow: hidden scroll;
      }
    `,
    {}
  );
});

it('with overflow: hidden overlay', async () => {
  await testEqualResult(
    css`
      div {
        overflow: hidden overlay;
      }
    `,
    css`
      div {
        overflow: hidden overlay;
        overflow: hidden auto;
      }
    `,
    {}
  );
});

it('with overflow: overlay hidden', async () => {
  await testEqualResult(
    css`
      div {
        height: auto;
        overflow: overlay hidden;
      }
    `,
    css`
      div {
        height: auto;
        overflow: overlay hidden;
        overflow: auto hidden;
      }
    `,
    {}
  );
});
