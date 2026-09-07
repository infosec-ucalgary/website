{ pkgs, lib, config, inputs, ... }:

{
  packages = [
    pkgs.git
    pkgs.sqlite
  ];

  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_20;
    npm.enable = true;
  };

  scripts.dev.exec = ''
    npm run dev
  '';

  scripts.build.exec = ''
    npm run build
  '';

  scripts.preview.exec = ''
    npm run build && npx wrangler pages dev .svelte-kit/cloudflare
  '';

  scripts.deploy.exec = ''
    npm run build && npx wrangler pages deploy .svelte-kit/cloudflare
  '';

  scripts.db-migrate.exec = ''
    npx wrangler d1 migrations apply DB --local
  '';

  scripts.db-migrate-remote.exec = ''
    npx wrangler d1 migrations apply DB --remote
  '';

  tasks."npm:install" = {
    exec = "npm install";
    before = [ "devenv:enterShell" ];
  };

  enterShell = ''
    echo "$GREETING"
    echo ""
    echo "node   $(node --version)"
    echo "npm    $(npm --version)"
    echo "wrangler  $(npx wrangler --version 2>/dev/null || echo 'not installed yet — run npm install')"
    echo ""
    echo "commands: dev | build | preview | deploy | db-migrate | db-migrate-remote"
  '';

  enterTest = ''
    node --version
    npm --version
  '';

  git-hooks.hooks = {
    prettier.enable = true;
  };

  # See full reference at https://devenv.sh/reference/options/
}
