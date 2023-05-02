/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AuctionEngine, AuctionEngineInterface } from "../AuctionEngine";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "itemName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startingPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "AuctionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "finalPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    name: "AuctionEnded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctions",
    outputs: [
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startingPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "finalPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endsAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "discountRate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "item",
        type: "string",
      },
      {
        internalType: "bool",
        name: "stopped",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startingPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_discountRate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_item",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "createAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getPriceFor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002b67784117e42cf96e6e60c01b61008a60201b60201c565b6100456749abe6d5dc9926fe60c01b61008a60201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061008d565b50565b6118168061009c6000396000f3fe60806040526004361061004a5760003560e01c80634534cd9c1461004f578063571a26a01461008c5780638da5cb5b146100d0578063d96a094a146100fb578063e9835d1514610117575b600080fd5b34801561005b57600080fd5b5061007660048036038101906100719190610e09565b610140565b6040516100839190610e45565b60405180910390f35b34801561009857600080fd5b506100b360048036038101906100ae9190610e09565b610434565b6040516100c7989796959493929190610f4c565b60405180910390f35b3480156100dc57600080fd5b506100e5610541565b6040516100f29190610ff2565b60405180910390f35b61011560048036038101906101109190610e09565b610565565b005b34801561012357600080fd5b5061013e60048036038101906101399190611072565b610a3a565b005b60006101566767d5711c67daf39660c01b610db4565b61016a674d8559034e323e1b60c01b610db4565b61017e67d13edadb1eb9a5f460c01b610db4565b600060018381548110610194576101936110fa565b5b9060005260206000209060080201604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201805461024690611158565b80601f016020809104026020016040519081016040528092919081815260200182805461027290611158565b80156102bf5780601f10610294576101008083540402835291602001916102bf565b820191906000526020600020905b8154815290600101906020018083116102a257829003601f168201915b505050505081526020016007820160009054906101000a900460ff16151515158152505090506102f9671aacdd181200f0de60c01b610db4565b61030d6702a6edcf43abd8b760c01b610db4565b61032167faeae987b19d07ca60c01b610db4565b8060e0015115610366576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035d906111d5565b60405180910390fd5b61037a67acf6982bdee47ce060c01b610db4565b61038e676de5d032c28e6caf60c01b610db4565b6103a2672c4970cd984e396a60c01b610db4565b60008160600151426103b49190611224565b90506103ca67375a74ef554dd14060c01b610db4565b6103de671e9978e892c6099860c01b610db4565b6000818360a001516103f09190611258565b905061040667a05f85e4913cd36e60c01b610db4565b61041a6719587525cd19cff960c01b610db4565b80836020015161042a9190611224565b9350505050919050565b6001818154811061044457600080fd5b90600052602060002090600802016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040154908060050154908060060180546104ab90611158565b80601f01602080910402602001604051908101604052809291908181526020018280546104d790611158565b80156105245780601f106104f957610100808354040283529160200191610524565b820191906000526020600020905b81548152906001019060200180831161050757829003601f168201915b5050505050908060070160009054906101000a900460ff16905088565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61057967b42d39ad3cc4338f60c01b610db4565b61058d67fcdbdf4cb3dad1b160c01b610db4565b6105a16738dcda74ff79c47e60c01b610db4565b6000600182815481106105b7576105b66110fa565b5b906000526020600020906008020190506105db6712f7fc00b0fca71760c01b610db4565b6105ef67b02fc89a3046b6e260c01b610db4565b610603670fe85460d4dcd09e60c01b610db4565b8060070160009054906101000a900460ff1615610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064c906111d5565b60405180910390fd5b6106696707a7709f10084bcc60c01b610db4565b61067d67a6b5bdd35886129560c01b610db4565b61069167acb836bc8e3b4a4860c01b610db4565b6106a567d0b4660af7a98d8360c01b610db4565b806004015442106106eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e2906112e6565b60405180910390fd5b6106ff67e7fa03ef032871b760c01b610db4565b610713672034a5d363e3443e60c01b610db4565b61072767524355a62939172b60c01b610db4565b600061073283610140565b90506107486719eed7d08f144e0160c01b610db4565b61075c67131d9bf72db3a77560c01b610db4565b6107706739e2a0c325c3be1860c01b610db4565b803410156107b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107aa90611352565b60405180910390fd5b6107c7678a23233195ccf36960c01b610db4565b6107db671a1a719d51a0bbcc60c01b610db4565b60018260070160006101000a81548160ff02191690831515021790555061080c67d413b8c4ddfa300760c01b610db4565b8082600201819055506108296794e9961a926efccc60c01b610db4565b61083d67e6c78ce786c62d8e60c01b610db4565b6000813461084b9190611224565b90506108616746361283711e6bb160c01b610db4565b61087567a37a64e88cd0446d60c01b610db4565b6000811115610906576108926786b95908d606515460c01b610db4565b6108a6678e4332d5c5c3cd3260c01b610db4565b6108ba671d2864e93eca153c60c01b610db4565b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610900573d6000803e3d6000fd5b5061091b565b61091a67cfaf3d5a6d767c9860c01b610db4565b5b61092f67e5780c9b3bcd368c60c01b610db4565b610943677a6b0edb274859b260c01b610db4565b8260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6064600a856109909190611258565b61099a91906113a1565b846109a59190611224565b9081150290604051600060405180830381858888f193505050501580156109d0573d6000803e3d6000fd5b506109e567f8d6e864a793f0c660c01b610db4565b6109f96764e5e040fbeecaba60c01b610db4565b7fbafc4bda865d4d1f8d5b16f883e996fde0fe71112fac81503876d35375694400848333604051610a2c939291906113d2565b60405180910390a150505050565b610a4e6725d6b84801237cf860c01b610db4565b610a6267781f56be641c9dd060c01b610db4565b610a7667c25b7b4293951bf960c01b610db4565b60008082148015610a975750610a9667c2c5f0653a01f23960c01b610db7565b5b80610ab25750610ab167a27c825317d42e5260c01b610dc2565b5b610abc5781610ac1565b6202a3005b9050610ad767919adf17cbb0efc360c01b610db4565b610aeb679da687ca2470a73a60c01b610db4565b610aff67aabfafeb876136fb60c01b610db4565b8085610b0b9190611258565b861015610b4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4490611455565b60405180910390fd5b610b6167a50cc39222efb7d860c01b610db4565b610b75676f697edc350e791660c01b610db4565b610b8967a3efc2bbc227ab3060c01b610db4565b60006040518061010001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018881526020014281526020018342610bd19190611475565b815260200187815260200186868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508152602001600015158152509050610c436717df9644bdd124bf60c01b610db4565b610c5767699043a19bc1b15960c01b610db4565b600181908060018154018082558091505060019003906000526020600020906008020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c0820151816006019081610d119190611684565b5060e08201518160070160006101000a81548160ff0219169083151502179055505050610d4867ded12f6c954f1acf60c01b610db4565b610d5c6768f76050fcac0fa760c01b610db4565b7f5bf34ed94988e5dcdc7d1faaa54eb1d3b55f45d5f11457e235afb21a8ebbe73c60018080549050610d8e9190611224565b86868a86604051610da3959493929190611792565b60405180910390a150505050505050565b50565b600060019050919050565b6000919050565b600080fd5b600080fd5b6000819050919050565b610de681610dd3565b8114610df157600080fd5b50565b600081359050610e0381610ddd565b92915050565b600060208284031215610e1f57610e1e610dc9565b5b6000610e2d84828501610df4565b91505092915050565b610e3f81610dd3565b82525050565b6000602082019050610e5a6000830184610e36565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e8b82610e60565b9050919050565b610e9b81610e80565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610edb578082015181840152602081019050610ec0565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f0382610ea1565b610f0d8185610eac565b9350610f1d818560208601610ebd565b610f2681610ee7565b840191505092915050565b60008115159050919050565b610f4681610f31565b82525050565b600061010082019050610f62600083018b610e92565b610f6f602083018a610e36565b610f7c6040830189610e36565b610f896060830188610e36565b610f966080830187610e36565b610fa360a0830186610e36565b81810360c0830152610fb58185610ef8565b9050610fc460e0830184610f3d565b9998505050505050505050565b6000610fdc82610e60565b9050919050565b610fec81610fd1565b82525050565b60006020820190506110076000830184610fe3565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126110325761103161100d565b5b8235905067ffffffffffffffff81111561104f5761104e611012565b5b60208301915083600182028301111561106b5761106a611017565b5b9250929050565b60008060008060006080868803121561108e5761108d610dc9565b5b600061109c88828901610df4565b95505060206110ad88828901610df4565b945050604086013567ffffffffffffffff8111156110ce576110cd610dce565b5b6110da8882890161101c565b935093505060606110ed88828901610df4565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061117057607f821691505b60208210810361118357611182611129565b5b50919050565b7f53746f7070656421000000000000000000000000000000000000000000000000600082015250565b60006111bf600883610eac565b91506111ca82611189565b602082019050919050565b600060208201905081810360008301526111ee816111b2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061122f82610dd3565b915061123a83610dd3565b9250828203905081811115611252576112516111f5565b5b92915050565b600061126382610dd3565b915061126e83610dd3565b925082820261127c81610dd3565b91508282048414831517611293576112926111f5565b5b5092915050565b7f456e646564210000000000000000000000000000000000000000000000000000600082015250565b60006112d0600683610eac565b91506112db8261129a565b602082019050919050565b600060208201905081810360008301526112ff816112c3565b9050919050565b7f6e6f7420656e6f7567682066756e647300000000000000000000000000000000600082015250565b600061133c601083610eac565b915061134782611306565b602082019050919050565b6000602082019050818103600083015261136b8161132f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006113ac82610dd3565b91506113b783610dd3565b9250826113c7576113c6611372565b5b828204905092915050565b60006060820190506113e76000830186610e36565b6113f46020830185610e36565b6114016040830184610fe3565b949350505050565b7f696e636f7272656374207374617274696e672070726963650000000000000000600082015250565b600061143f601883610eac565b915061144a82611409565b602082019050919050565b6000602082019050818103600083015261146e81611432565b9050919050565b600061148082610dd3565b915061148b83610dd3565b92508282019050808211156114a3576114a26111f5565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261153a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826114fd565b61154486836114fd565b95508019841693508086168417925050509392505050565b6000819050919050565b600061158161157c61157784610dd3565b61155c565b610dd3565b9050919050565b6000819050919050565b61159b83611566565b6115af6115a782611588565b84845461150a565b825550505050565b600090565b6115c46115b7565b6115cf818484611592565b505050565b5b818110156115f3576115e86000826115bc565b6001810190506115d5565b5050565b601f82111561163857611609816114d8565b611612846114ed565b81016020851015611621578190505b61163561162d856114ed565b8301826115d4565b50505b505050565b600082821c905092915050565b600061165b6000198460080261163d565b1980831691505092915050565b6000611674838361164a565b9150826002028217905092915050565b61168d82610ea1565b67ffffffffffffffff8111156116a6576116a56114a9565b5b6116b08254611158565b6116bb8282856115f7565b600060209050601f8311600181146116ee57600084156116dc578287015190505b6116e68582611668565b86555061174e565b601f1984166116fc866114d8565b60005b82811015611724578489015182556001820191506020850194506020810190506116ff565b86831015611741578489015161173d601f89168261164a565b8355505b6001600288020188555050505b505050505050565b82818337600083830152505050565b60006117718385610eac565b935061177e838584611756565b61178783610ee7565b840190509392505050565b60006080820190506117a76000830188610e36565b81810360208301526117ba818688611765565b90506117c96040830185610e36565b6117d66060830184610e36565b969550505050505056fea26469706673582212203f27b8d35f1c777a5bfc84ab89a988a2b6aa49506a0896438fdfbc5e17f23e3964736f6c63430008120033";

type AuctionEngineConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AuctionEngineConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AuctionEngine__factory extends ContractFactory {
  constructor(...args: AuctionEngineConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AuctionEngine> {
    return super.deploy(overrides || {}) as Promise<AuctionEngine>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AuctionEngine {
    return super.attach(address) as AuctionEngine;
  }
  override connect(signer: Signer): AuctionEngine__factory {
    return super.connect(signer) as AuctionEngine__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuctionEngineInterface {
    return new utils.Interface(_abi) as AuctionEngineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AuctionEngine {
    return new Contract(address, _abi, signerOrProvider) as AuctionEngine;
  }
}
