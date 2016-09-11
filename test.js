import test from 'ava';
import execa from 'execa';

test('show help screen', async t => {
	t.regex(await execa.stdout('./cli.js', ['--help']), /Get the GitHub user from a token/);
});

test('show version', async t => {
	t.is(await execa.stdout('./cli.js', ['--version']), require('./package').version);
});

test('get user from token', async t => {
	t.is(await execa.stdout('./cli.js', ['523ef691191741c99d5afbcfe58079bfa0038771']), 'kevva');
});
