// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class DelegateChanged extends ethereum.Event {
  get params(): DelegateChanged__Params {
    return new DelegateChanged__Params(this);
  }
}

export class DelegateChanged__Params {
  _event: DelegateChanged;

  constructor(event: DelegateChanged) {
    this._event = event;
  }

  get delegator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fromDelegate(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get toDelegate(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class DelegateVotesChanged extends ethereum.Event {
  get params(): DelegateVotesChanged__Params {
    return new DelegateVotesChanged__Params(this);
  }
}

export class DelegateVotesChanged__Params {
  _event: DelegateVotesChanged;

  constructor(event: DelegateVotesChanged) {
    this._event = event;
  }

  get delegate(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get previousBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newBalance(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MinterChanged extends ethereum.Event {
  get params(): MinterChanged__Params {
    return new MinterChanged__Params(this);
  }
}

export class MinterChanged__Params {
  _event: MinterChanged;

  constructor(event: MinterChanged) {
    this._event = event;
  }

  get minter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newMinter(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Tribe__checkpointsResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Tribe extends ethereum.SmartContract {
  static bind(address: Address): Tribe {
    return new Tribe("Tribe", address);
  }

  DELEGATION_TYPEHASH(): Bytes {
    let result = super.call(
      "DELEGATION_TYPEHASH",
      "DELEGATION_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DELEGATION_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DELEGATION_TYPEHASH",
      "DELEGATION_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DOMAIN_TYPEHASH(): Bytes {
    let result = super.call(
      "DOMAIN_TYPEHASH",
      "DOMAIN_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DOMAIN_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DOMAIN_TYPEHASH",
      "DOMAIN_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PERMIT_TYPEHASH(): Bytes {
    let result = super.call(
      "PERMIT_TYPEHASH",
      "PERMIT_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_PERMIT_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "PERMIT_TYPEHASH",
      "PERMIT_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  allowance(account: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(account), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(
    account: Address,
    spender: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(account), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, rawAmount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(rawAmount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(
    spender: Address,
    rawAmount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(rawAmount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkpoints(param0: Address, param1: BigInt): Tribe__checkpointsResult {
    let result = super.call(
      "checkpoints",
      "checkpoints(address,uint32):(uint32,uint96)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new Tribe__checkpointsResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_checkpoints(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Tribe__checkpointsResult> {
    let result = super.tryCall(
      "checkpoints",
      "checkpoints(address,uint32):(uint32,uint96)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Tribe__checkpointsResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  delegates(param0: Address): Address {
    let result = super.call("delegates", "delegates(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_delegates(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("delegates", "delegates(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCurrentVotes(account: Address): BigInt {
    let result = super.call(
      "getCurrentVotes",
      "getCurrentVotes(address):(uint96)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_getCurrentVotes(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentVotes",
      "getCurrentVotes(address):(uint96)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPriorVotes(account: Address, blockNumber: BigInt): BigInt {
    let result = super.call(
      "getPriorVotes",
      "getPriorVotes(address,uint256):(uint96)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(blockNumber)
      ]
    );

    return result[0].toBigInt();
  }

  try_getPriorVotes(
    account: Address,
    blockNumber: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPriorVotes",
      "getPriorVotes(address,uint256):(uint96)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(blockNumber)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minter(): Address {
    let result = super.call("minter", "minter():(address)", []);

    return result[0].toAddress();
  }

  try_minter(): ethereum.CallResult<Address> {
    let result = super.tryCall("minter", "minter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nonces(param0: Address): BigInt {
    let result = super.call("nonces", "nonces(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_nonces(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nonces", "nonces(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  numCheckpoints(param0: Address): BigInt {
    let result = super.call(
      "numCheckpoints",
      "numCheckpoints(address):(uint32)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_numCheckpoints(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numCheckpoints",
      "numCheckpoints(address):(uint32)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(dst: Address, rawAmount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(dst),
      ethereum.Value.fromUnsignedBigInt(rawAmount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(dst: Address, rawAmount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(dst),
      ethereum.Value.fromUnsignedBigInt(rawAmount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(src: Address, dst: Address, rawAmount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(src),
        ethereum.Value.fromAddress(dst),
        ethereum.Value.fromUnsignedBigInt(rawAmount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    src: Address,
    dst: Address,
    rawAmount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(src),
        ethereum.Value.fromAddress(dst),
        ethereum.Value.fromUnsignedBigInt(rawAmount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get minter_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rawAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DelegateCall extends ethereum.Call {
  get inputs(): DelegateCall__Inputs {
    return new DelegateCall__Inputs(this);
  }

  get outputs(): DelegateCall__Outputs {
    return new DelegateCall__Outputs(this);
  }
}

export class DelegateCall__Inputs {
  _call: DelegateCall;

  constructor(call: DelegateCall) {
    this._call = call;
  }

  get delegatee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DelegateCall__Outputs {
  _call: DelegateCall;

  constructor(call: DelegateCall) {
    this._call = call;
  }
}

export class DelegateBySigCall extends ethereum.Call {
  get inputs(): DelegateBySigCall__Inputs {
    return new DelegateBySigCall__Inputs(this);
  }

  get outputs(): DelegateBySigCall__Outputs {
    return new DelegateBySigCall__Outputs(this);
  }
}

export class DelegateBySigCall__Inputs {
  _call: DelegateBySigCall;

  constructor(call: DelegateBySigCall) {
    this._call = call;
  }

  get delegatee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get nonce(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class DelegateBySigCall__Outputs {
  _call: DelegateBySigCall;

  constructor(call: DelegateBySigCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get dst(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rawAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class PermitCall extends ethereum.Call {
  get inputs(): PermitCall__Inputs {
    return new PermitCall__Inputs(this);
  }

  get outputs(): PermitCall__Outputs {
    return new PermitCall__Outputs(this);
  }
}

export class PermitCall__Inputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get spender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get rawAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class PermitCall__Outputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }
}

export class SetMinterCall extends ethereum.Call {
  get inputs(): SetMinterCall__Inputs {
    return new SetMinterCall__Inputs(this);
  }

  get outputs(): SetMinterCall__Outputs {
    return new SetMinterCall__Outputs(this);
  }
}

export class SetMinterCall__Inputs {
  _call: SetMinterCall;

  constructor(call: SetMinterCall) {
    this._call = call;
  }

  get minter_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMinterCall__Outputs {
  _call: SetMinterCall;

  constructor(call: SetMinterCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get dst(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rawAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get src(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dst(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get rawAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
