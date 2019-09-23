const Lottery = artifacts.require('lottery');

contract('Lottery', function([deployer, user1, user2]){
    let lottery;
    beforeEach(async () => {
        console.log('before each');
        lottery = await Lottery.new(); //배포
    })

    it('basic test', async () => {
        console.log('basic test');
        let owner = await lottery.owner();
        let value = await lottery.getSomeValue();

        console.log(`owner : ${owner}`);
        console.log(`value : ${value}`);

        assert.equal(value, 5);
    })


});