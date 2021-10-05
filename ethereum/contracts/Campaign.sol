pragma solidity ^0.4.25;

/**
 * @title Campaign
 * @dev Ishaan Singhal
 */
contract CampaignGenerator{
    address[] public campaignsList;
    
    function createCampaign(uint minimum) public {
        address newCampaign=new Campaign(minimum,msg.sender);
        campaignsList.push(newCampaign);
    }
    function getCampaignList() public view returns(address[]){
        return campaignsList;
    }
}
contract Campaign{
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvedCount;
        mapping(address=>bool) peopleApproved;
    }
    Request[] public request;
    address public manager;
    uint public minimumContribution;
    mapping(address=>bool) public approvers;
    uint public approversCount;
    
    constructor(uint minimum, address creator) public{
        manager=creator;
        minimumContribution=minimum;
    }
    modifier restricted(){
        require(msg.sender==manager);
        _;
    }
    function contribute() public payable{
        require(msg.value>minimumContribution);
        approvers[msg.sender]=true;
        approversCount++;
        
    }
    function createRequest( string description,uint value,address recipient) public restricted{
        Request memory req=Request({
           description:description,
           value:value,
           recipient:recipient,
           complete:false,
           approvedCount:0
        });
        request.push(req);
    }
    function approveRequest(uint index) public {
        Request storage currReq=request[index];
        require(approvers[msg.sender]);
        require(!currReq.peopleApproved[msg.sender]);
        
        currReq.peopleApproved[msg.sender]=true;
        currReq.approvedCount++;
    }
    function finalizeRequest(uint index) public restricted{
        Request storage currReq=request[index];
        require(currReq.approvedCount>=(approversCount/2));
        require(!currReq.complete);
        currReq.recipient.transfer(currReq.value);
        currReq.complete=true;
    }

    function getSummary() public view returns(uint,uint,uint,uint,address){
        return (
            minimumContribution,
            address(this).balance,
            request.length,
            approversCount,
            manager
        );
    }
    function getRequestsCount() public view returns(uint){
        return request.length;
    }
}