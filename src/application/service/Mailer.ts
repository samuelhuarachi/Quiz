interface Mailer {
    send(recipient: string, message: string): Promise<void>
}

export { Mailer };
