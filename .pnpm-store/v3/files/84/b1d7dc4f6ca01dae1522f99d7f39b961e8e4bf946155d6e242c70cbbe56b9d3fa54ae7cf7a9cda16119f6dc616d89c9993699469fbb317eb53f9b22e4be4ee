var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/file-resolver-protocol.ts
__export(exports, {
  default: () => Protocol
});
var generateId = () => Math.floor(Math.random() * 1e6 + Math.random() * 1e6);
var getConstructorName = (x) => {
  try {
    return x.constructor.name;
  } catch (e) {
    return "";
  }
};
var Protocol = class {
  constructor(type, handleMessage, target) {
    this.type = type;
    this.handleMessage = handleMessage;
    this.target = target;
    this.outgoingMessages = new Set();
    this._messageListener = (e) => __async(this, null, function* () {
      const { data } = e;
      if (data.$type !== this.getTypeId()) {
        return;
      }
      if (this.outgoingMessages.has(data.$id)) {
        return;
      }
      const result = yield this.handleMessage(data.$data);
      const returnMessage = {
        $originId: this.internalId,
        $type: this.getTypeId(),
        $data: result,
        $id: data.$id
      };
      if (e.source) {
        e.source.postMessage(returnMessage, "*");
      } else {
        this._postMessage(returnMessage);
      }
    });
    this.createConnection();
    this.internalId = generateId();
    this.isWorker = getConstructorName(target) === "Worker";
  }
  getTypeId() {
    return `p-${this.type}`;
  }
  createConnection() {
    self.addEventListener("message", this._messageListener);
  }
  dispose() {
    self.removeEventListener("message", this._messageListener);
  }
  sendMessage(data) {
    return new Promise((resolve) => {
      const messageId = generateId();
      const message = {
        $originId: this.internalId,
        $type: this.getTypeId(),
        $data: data,
        $id: messageId
      };
      this.outgoingMessages.add(messageId);
      const listenFunction = (e) => {
        const { data: data2 } = e;
        if (data2.$type === this.getTypeId() && data2.$id === messageId && data2.$originId !== this.internalId) {
          resolve(data2.$data);
          self.removeEventListener("message", listenFunction);
        }
      };
      self.addEventListener("message", listenFunction);
      this._postMessage(message);
    });
  }
  _postMessage(m) {
    if (this.isWorker || typeof DedicatedWorkerGlobalScope !== "undefined" && this.target instanceof DedicatedWorkerGlobalScope) {
      this.target.postMessage(m);
    } else {
      this.target.postMessage(m, "*");
    }
  }
};
//# sourceMappingURL=file-resolver-protocol.js.map
