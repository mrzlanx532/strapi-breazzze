# Generate keys
APP_KEYS=$(openssl rand -base64 16),$(openssl rand -base64 16),$(openssl rand -base64 16)
API_TOKEN_SALT=$(openssl rand -base64 16)
ADMIN_JWT_SECRET=$(openssl rand -base64 16)
TRANSFER_TOKEN_SALT=$(openssl rand -base64 16)

# Print results
echo "APP_KEYS=$APP_KEYS"
echo "API_TOKEN_SALT=$API_TOKEN_SALT"
echo "ADMIN_JWT_SECRET=$ADMIN_JWT_SECRET"
echo "TRANSFER_TOKEN_SALT=$TRANSFER_TOKEN_SALT"


unset APP_KEYS API_TOKEN_SALT ADMIN_JWT_SECRET TRANSFER_TOKEN_SALT