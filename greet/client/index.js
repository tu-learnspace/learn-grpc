const grpc = require('@grpc/grpc-js')
const {GreatServiceClient} = require('../proto/greet_grpc_pb')

function main() {
  const creds = grpc.credentials.createInsecure()
  const client = new GreatServiceClient('localhost:50051', creds)

  client.close()
}

main()
